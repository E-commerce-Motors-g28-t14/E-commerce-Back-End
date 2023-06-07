import { Car } from "../entities";
import {
  ICarRequest,
  ICarResponse,
  ICarUpdate,
  ICarWithoutPhotosRequest,
  IPhotoResponse,
} from "../interfaces";
import { carRepository, photoRepository } from "../repositories";
import { carResponseSerializer } from "../serializers";

export const CreateCarService = async (
  carData: ICarRequest
): Promise<ICarResponse> => {
  const { newPhotos, fipePrice, ...payload } = carData;

  const isInPromo: boolean = +fipePrice * 0.95 >= +payload.price;

  const newCar: ICarWithoutPhotosRequest = carRepository.create({
    ...payload,
    isActive: true,
    isPromo: isInPromo,
  });

  await carRepository.save(newCar);

  const photosData: IPhotoResponse[] = [];

  await Promise.all(
    newPhotos.map(async (photo) => {
      const photoData: IPhotoResponse = photoRepository.create({
        ...photo,
        car: newCar,
      });

      photosData.push(photoData);

      await photoRepository.save(photoData);
    })
  );

  const carReturn: ICarResponse = carResponseSerializer.parse({
    ...newCar,
    photos: photosData,
  });

  return carReturn;
};

export const GetCarsService = async (): Promise<ICarResponse[]> => {
  const cars = await carRepository.find({ relations: { photos: true } });

  return cars;
};

export const UpdateCarService = async (
  carData: ICarUpdate,
  carId: string
): Promise<ICarResponse> => {
  const { newPhotos, ...payload } = carData;

  await carRepository.update(carId, payload);

  const car: Car = await carRepository
    .createQueryBuilder("car")
    .where("car.id = :id", { id: carId })
    .leftJoinAndSelect("car.photos", "photos")
    .getOne();

  const carReturn: ICarResponse = carResponseSerializer.parse(car);

  return carReturn;
};

export const RemoveCarService = async (carId: string): Promise<void> => {
  const car: Car = await carRepository.findOneBy({ id: carId });

  const photos = await photoRepository.find({
    where: {
      car: {
        id: carId,
      },
    },
  });

  await photoRepository.remove(photos);

  await carRepository.remove(car);
};

import { Car } from "../../entities";
import { ICarResponse, ICarUpdate, IPhotoResponse } from "../../interfaces";
import { carRepository, photoRepository } from "../../repositories";
import { carResponseSerializer } from "../../serializers";

export const UpdateCarService = async (
  carData: ICarUpdate,
  carId: string
): Promise<ICarResponse> => {
  const { photos, fipePrice, ...payload } = carData;

  const isInPromo: boolean = +fipePrice * 0.95 >= +payload.price;

  const car: Car = await carRepository.findOneBy({ id: carId });

  await carRepository.update(carId, {
    ...payload,
    isPromo: isInPromo,
  });

  const oldPhotos = await photoRepository.find({
    where: {
      car: {
        id: carId,
      },
    },
  });

  await photoRepository.remove(oldPhotos);

  await Promise.all(
    photos.map(async (photo) => {
      const photoData: IPhotoResponse = photoRepository.create({
        ...photo,
        car,
      });

      await photoRepository.save(photoData);
    })
  );

  const updatedCar: Car = await carRepository
    .createQueryBuilder("car")
    .where("car.id = :id", { id: carId })
    .leftJoinAndSelect("car.photos", "photos")
    .getOne();

  const carReturn: ICarResponse = carResponseSerializer.parse(updatedCar);

  return carReturn;
};

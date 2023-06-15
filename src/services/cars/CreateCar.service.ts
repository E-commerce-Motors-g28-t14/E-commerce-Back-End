import {
  ICarRequest,
  ICarResponse,
  ICarWithoutPhotosRequest,
  IPhotoResponse,
} from "../../interfaces";
import { carRepository, photoRepository, userRepository } from "../../repositories";
import { carResponseSerializer } from "../../serializers";

export const CreateCarService = async (
  carData: ICarRequest,
  idUser: string
): Promise<ICarResponse> => {
  const { photos, fipePrice, ...payload } = carData;
  const isInPromo: boolean = +fipePrice * 0.95 >= +payload.price;
  
  const seller = await userRepository.findOne({
    where:{id:idUser}
  })

  const newCar: ICarWithoutPhotosRequest = carRepository.create({
    ...payload,
    isActive: true,
    isPromo: isInPromo,
    user: seller
  });

  await carRepository.save(newCar);

  const photosData: IPhotoResponse[] = [];

  await Promise.all(
    photos.map(async (photo) => {
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

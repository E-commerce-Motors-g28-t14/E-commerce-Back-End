import { Car } from "../../entities";
import { ICarResponse, ICarUpdate } from "../../interfaces";
import { carRepository } from "../../repositories";
import { carResponseSerializer } from "../../serializers";

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

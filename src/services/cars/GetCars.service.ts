import { ICarResponse } from "../../interfaces";
import { carRepository } from "../../repositories";

export const GetCarsService = async (): Promise<ICarResponse[]> => {
  const cars = await carRepository.find({ relations: { photos: true } });

  return cars;
};

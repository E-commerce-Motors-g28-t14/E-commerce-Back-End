import { ICarInfoResponse, ICarResponse } from "../../interfaces";
import { carRepository } from "../../repositories";

export const GetCarsInfoService = async () => {
  const cars: ICarResponse[] = await carRepository.find();

  const carsInfo = cars.reduce((acc, cur) => {
    (acc[cur["brand"]] = acc[cur["brand"]] || []).push(cur);
    return acc;
  }, {});

  return carsInfo;
};

import { ICarInfoResponse, ICarResponse } from "../../interfaces";
import { carRepository } from "../../repositories";

export const GetCarsInfoService = async (): Promise<ICarInfoResponse> => {
  const cars: ICarResponse[] = await carRepository.find();

  const carsInfo: ICarInfoResponse = {
    brands: [],
    models: [],
    colors: [],
    fuels: [],
    years: [],
  };

  cars.forEach((car) => {
    carsInfo.brands.includes(car.brand)
      ? null
      : carsInfo.brands.push(car.brand);
    carsInfo.models.includes(car.model)
      ? null
      : carsInfo.models.push(car.model);
    carsInfo.colors.includes(car.color)
      ? null
      : carsInfo.colors.push(car.color);
    carsInfo.fuels.includes(car.fuel) ? null : carsInfo.fuels.push(car.fuel);
    carsInfo.years.includes(car.year) ? null : carsInfo.years.push(car.year);
  });

  return carsInfo;
};

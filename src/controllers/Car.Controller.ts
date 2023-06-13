import { Request, Response } from "express";
import {
  CreateCarService,
  GetCarsInfoService,
  GetCarsService,
  RemoveCarService,
  UpdateCarService,
} from "../services";
import {
  ICarInfoResponse,
  ICarRequest,
  ICarResponse,
  ICarUpdate,
} from "../interfaces";

const CreateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarRequest = req.body;
  const car: ICarResponse = await CreateCarService(data);
  return res.status(201).json(car);
};

const GetCarsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const cars: ICarResponse[] = await GetCarsService();
  return res.status(200).json(cars);
};

const GetCarsInfoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carsInfo: ICarInfoResponse = await GetCarsInfoService();
  return res.status(200).json(carsInfo);
};

const UpdateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarUpdate = req.body;
  const carId: string = req.params.id;

  const car: ICarResponse = await UpdateCarService(data, carId);
  return res.status(200).json(car);
};

const RemoveCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const carId: string = req.params.id;

  await RemoveCarService(carId);

  return res.status(204).send();
};

export {
  CreateCarController,
  GetCarsController,
  GetCarsInfoController,
  UpdateCarController,
  RemoveCarController,
};

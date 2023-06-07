import { Request, Response } from "express";
import {
  CreateCarService,
  GetCarsService,
  UpdateCarService,
} from "../services";
import { ICarRequest, ICarResponse, ICarUpdate } from "../interfaces";

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

const UpdateCarController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICarUpdate = req.body;
  const carId: string = req.params.id;

  const car: ICarResponse = await UpdateCarService(data, carId);
  return res.status(200).json(car);
};

export { CreateCarController, GetCarsController, UpdateCarController };

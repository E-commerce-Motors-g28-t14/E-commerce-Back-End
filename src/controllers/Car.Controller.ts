import { Request, Response } from "express";
import { CreateCarService, GetCarsService } from "../services/Cars.Service";
import { ICarRequest, ICarResponse } from "../interfaces";

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

export { CreateCarController, GetCarsController };

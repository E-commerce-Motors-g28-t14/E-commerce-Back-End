import { Request, Response } from "express";
import { CreateCarService, GetCarsService } from "../services/Cars.Service";
import { ICarRequest } from "../interfaces/Cars.interfaces";

export const CarController = async (req: Request, res: Response) => {
  const data = req.body;
  const car = await CreateCarService(data);
  res.status(201).json(car);
};

export const GetCarsController = async (req: Request, res: Response) => {
  const data = await GetCarsService();
  res.status(200).json(data);
};

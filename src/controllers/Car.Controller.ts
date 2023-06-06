import { Request, Response } from "express";
import { CreateCarService } from "../services/Cars.Service";
import { ICarRequest } from "../interfaces/Cars.interfaces";

export const CarController = async (req: Request, res: Response) => {
  const data = req.body;
  const car = await CreateCarService(data, req.params.id);
  res.status(201).json(car);
};

import { NextFunction, Request, Response } from "express";
import { Car } from "../entities";
import { carRepository } from "../repositories";
import { AppError } from "../errors";

export const verifyCarExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const carId: string = req.params.id;

  const car: Car | undefined = await carRepository.findOne({
    where: { id: carId },
  });

  if (!car) {
    throw new AppError("Car not found!", 404);
  }

  return next();
};

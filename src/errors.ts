import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

export const HandleError = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(400).json({ message: err.flatten().fieldErrors });
  }
  return res.status(500).send({ message: err.message });
};

import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isOwnerId = (req: Request, res: Response, next: NextFunction) => {
  const idParams: string = req.params.id;
  const idToken: string = res.locals.userToken.id;

  if (idParams !== idToken) {
    throw new AppError("Insufficient permission!", 403);
  }

  return next();
};

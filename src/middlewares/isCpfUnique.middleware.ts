import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { getUserByCpfService } from "../services";
import { AppError } from "../errors";

export const isCpfUniqueMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const userCpfRequest: string = req.body.cpf;

  const user: User | null = await getUserByCpfService(userCpfRequest);

  if (
    !user ||
    (req.method === "PATCH" && user.id === res.locals.userToken.id)
  ) {
    return next();
  }

  throw new AppError("cpf already exists", 409);
};

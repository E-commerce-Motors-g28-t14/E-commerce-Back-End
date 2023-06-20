import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

export const validateBodyMiddleware =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): Response | void => {
    const validateBody: any = schema.parse(req.body);

    req.body = validateBody;

    return next();
  };

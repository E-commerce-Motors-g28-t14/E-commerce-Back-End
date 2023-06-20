import "dotenv/config";
import { NextFunction, Request, Response } from "express";
import { decode, verify } from "jsonwebtoken";

export const validateTokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  let token: string | undefined = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Missing bearer token",
    });
  }

  token = token.split(" ")[1];

  verify(
    token,
    String(process.env.SECRET_KEY),
    (error: any, decoded: any): void | Response => {
      if (error || decoded.code) {
        return res.status(401).json({
          message: error.message,
        });
      }

      res.locals.userToken = {
<<<<<<< HEAD
        id: String(decoded.sub),
=======
        id: decoded.sub,
>>>>>>> 710803482d4b94e3f5f1693b41bd1ab2126dd741
        isSeller: decoded.isSeller,
      };
    }
  );

  return next();
};

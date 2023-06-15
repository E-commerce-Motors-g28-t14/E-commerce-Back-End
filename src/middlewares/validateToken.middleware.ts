import "dotenv/config"
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const validateTokenMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
    let token: string | undefined = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: "Missing bearer token"
        })
    }

    token = token.split(" ")[1]

    verify(
        token,
        String(process.env.SECRET_KEY),
        (error: any, decoded: any): void | Response => {
            if(error || decoded.code){
                return res.status(401).json({
                    message: error.message
                })
            }
            
            res.locals.userToken = {
                id: decoded.sub,
                isSeller: decoded.isSeller
            }
        }
    )

    return next()
}
import { NextFunction, Request, Response } from "express";

export const isSellerMiddleware = (req: Request, res: Response, next: NextFunction): Response | void => {
    const isSeller: boolean = res.locals.userToken.isSeller

    if(!isSeller){
        return res.status(403).json({
            message: "user is not seller"
        })
    }

    return next()
}
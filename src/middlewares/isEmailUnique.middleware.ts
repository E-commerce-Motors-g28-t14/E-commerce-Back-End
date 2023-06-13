import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { getUserByEmailService } from "../services/users/getUserByEmail.service";

export const isEmailUniqueMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const userEmail: string = req.body.email

    if(req.method === "PATCH" && !userEmail) return next()

    const user: User | null = await getUserByEmailService(userEmail)

    if(user){
        return res.status(409).json({
            message: "email already exists"
        })
    }

    return next()
}
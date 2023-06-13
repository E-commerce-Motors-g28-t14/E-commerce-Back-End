import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { getUserByCpfService } from "../services";

export const isCpfUniqueMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
    const userCpf: string = req.body.cpf
    
    if(req.method === "PATCH" && !userCpf) return next()

    const user: User | null = await getUserByCpfService(userCpf)

    if(user){
        return res.status(409).json({
            message: "cpf already exists"
        })
    }

    return next()
}
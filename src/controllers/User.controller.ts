import { Request, Response } from "express";
import { iUserCreate, iUserCreateReturn } from "../interfaces/User.interfaces";
import { createUserService } from "../services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const userData: iUserCreate = req.body

    const user: iUserCreateReturn = await createUserService(userData)
    
    return res.status(201).json(user)
}
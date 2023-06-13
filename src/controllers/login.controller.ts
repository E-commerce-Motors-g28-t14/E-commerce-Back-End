import { Request, Response } from "express";
import { loginUserService } from "../services";
import { iLoginUser, iLoginUserReturn } from "../interfaces";

export const loginUserController = async (req: Request, res: Response): Promise<Response> => {
    const loginData: iLoginUser = req.body
    const userData: iLoginUserReturn = await loginUserService(loginData) 
    
    return res.status(200).json(userData)
}
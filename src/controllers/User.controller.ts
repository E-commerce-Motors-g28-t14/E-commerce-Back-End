import { Request, Response } from "express";
import { iUserCreate, iUserCreateReturn } from "../interfaces/User.interfaces";
import { createUserService, getUserByIdService } from "../services";
import { User } from "../entities";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    console.log("entrou no controller CREATE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
    const userData: iUserCreate = req.body

    const user: iUserCreateReturn = await createUserService(userData)
    
    return res.status(201).json(user)
}

export const getUserByIdController = async (req: Request, res: Response): Promise<Response> => {    
    const id : string = req.params.id;

    const user = await getUserByIdService(id) 
    if(user instanceof User){
        return res.status(200).json(user)
    }
    else{
        return res.status(404).json({message:" User not found"})  
    } 

}
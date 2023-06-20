import { Request, Response } from "express";
import { iUserCreate, iUserCreateReturn } from "../interfaces/User.interfaces";
import {
  attUserAddressService,
  attUserService,
  createUserService,
  deleteUserService,
  getUserByIdService,
} from "../services";
import { User } from "../entities";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userData: iUserCreate = req.body;

  const user: iUserCreateReturn = await createUserService(userData);

  return res.status(201).json(user);
};

export const getUserByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const user: User | null = await getUserByIdService(id);
  return res.status(200).json(user);
};

export const attUserInfoController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const user: iUserCreateReturn = await attUserService(req.body, id);

  return res.status(200).json(user);
};

export const attUserAddressController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userToken.id;

  const address = await attUserAddressService(req.body, id);

  return res.status(200).json(address);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = res.locals.userToken.id;

  await deleteUserService(id);

  return res.status(204).send();
};

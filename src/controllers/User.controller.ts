import { Request, Response } from "express";
import { iUserCreate, iUserCreateReturn } from "../interfaces/User.interfaces";
import { getUsersService } from "../services/users/getUsers.service";
import { getUserProfileService } from "../services/users/getUserProfile.service";
import {
  recoveryUserPasswordService,
  sendEmailRecoveryService,
} from "../services/users/recoveryUserPassword.service";
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

export const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

export const getUserProfileController = async (req: Request, res: Response) => {
  const userData = res.locals.userToken.id;
  console.log(userData);

  const user = await getUserProfileService(userData);
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

export const sendEmailRecoveryController = async (
  req: Request,
  res: Response
) => {
  const email: string = req.body.email;
  const confirmSendEmailRecovery = await sendEmailRecoveryService(email);

  return res.status(200).json(confirmSendEmailRecovery);
};

export const recoveryUserPasswordController = async (
  req: Request,
  res: Response
) => {
  const newPassword: string = await req.body.password;
  const id = req.params.id;
  console.log(id);

  const confirmNewPassword = await recoveryUserPasswordService(newPassword, id);

  return res.status(200).json(confirmNewPassword);
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

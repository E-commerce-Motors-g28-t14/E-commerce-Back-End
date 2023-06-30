import {
  ICommentRequest,
  ICommentResponse,
} from "../interfaces/comments.interfaces";
import { Request, Response } from "express";
import {
  DeleteCommentsService,
  GetCommentsByIDService,
  GetCommentsService,
  CreateCommentService,
} from "../services";

export const CreateCommentController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const data: ICommentRequest = req.body;
  const idUser: string = res.locals.userToken.id;

  const comment: ICommentResponse = await CreateCommentService(data, idUser);

  return res.status(201).json(comment);
};

export const GetCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const comments = await GetCommentsService();
  return res.status(200).json(comments);
};

export const GetCommentsByIDController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  const comment = await GetCommentsByIDService(id);

  return res.status(200).json(comment);
};

export const DeleteCommentsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: string = req.params.id;

  await DeleteCommentsService(id);

  return res.status(204).send();
};

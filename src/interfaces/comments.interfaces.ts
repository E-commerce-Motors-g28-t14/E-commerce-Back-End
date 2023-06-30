import { z } from "zod";
import { createCommentSchema } from "../serializers/comments.serializers";
import { ICarResponse } from "./Cars.interfaces";
import { iUserCreateReturn } from "./User.interfaces";

type ICreateComment = z.infer<typeof createCommentSchema>;

interface ICommentRequest {
  comment: string;
  car: string;
}

interface ICommentResponse {
  id: string;
  comment: string;
  car: ICarResponse;
  user: iUserCreateReturn;
  createdAt: Date;
  updatedAt: Date;
}

export { ICreateComment, ICommentResponse, ICommentRequest };

import { z } from "zod";

const createCommentSchema = z.object({
  comment: z.string().max(250),
  createdAt: z.date(),
  updatedAt: z.date(),
  car: z.string(),
  user: z.string(),
});

const createCommentReturnSchema = createCommentSchema.extend({
  id: z.string(),
});

const CommentsCarReturnSchema = z.object({
  id: z.string(),
  comment: z.string().max(250),
  createdAt: z.date(),
  updatedAt: z.date(),
  username: z.string(),
});
export {
  createCommentReturnSchema,
  createCommentSchema,
  CommentsCarReturnSchema,
};

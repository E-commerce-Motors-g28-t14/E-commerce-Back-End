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

export { createCommentReturnSchema, createCommentSchema };
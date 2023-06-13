import { z } from "zod";
import { userCreateReturnSchema, userCreateSchema } from "../serializers";

export type iUserCreate = z.infer<typeof userCreateSchema>
export type iUserCreateReturn = z.infer<typeof userCreateReturnSchema>
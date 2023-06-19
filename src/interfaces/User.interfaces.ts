import { z } from "zod";
import {
  userAttSchema,
  userCreateReturnSchema,
  userCreateSchema,
} from "../serializers";

export type iUserCreate = z.infer<typeof userCreateSchema>;
export type iUserCreateReturn = z.infer<typeof userCreateReturnSchema>;
export type iUserAtt = z.infer<typeof userAttSchema>;

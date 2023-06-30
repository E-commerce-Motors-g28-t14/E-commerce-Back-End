import { z } from "zod";
import {
  userAttSchema,
  userCreateReturnSchema,
  userCreateSchema,
} from "../serializers";
import {
  userWithAllDataSchema,
  userWithCarsAndPhotosSchema,
  userWithoutAddressReturnSchema,
} from "../serializers/users.serializers";

export type iUserCreate = z.infer<typeof userCreateSchema>;
export type iUserCreateReturn = z.infer<typeof userCreateReturnSchema>;
export type iUserAtt = z.infer<typeof userAttSchema>;
export type iUserWithoutAddress = z.infer<
  typeof userWithoutAddressReturnSchema
>;
export type iUserWithAddressAndCarsAndPhotos = z.infer<
  typeof userWithAllDataSchema
>;
export type iUserWithCarsAndPhoto = z.infer<typeof userWithCarsAndPhotosSchema>;

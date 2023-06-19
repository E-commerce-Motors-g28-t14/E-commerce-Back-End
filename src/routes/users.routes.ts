import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { isCpfUniqueMiddleware } from "../middlewares/isCpfUnique.middleware";
import { isEmailUniqueMiddleware } from "../middlewares/isEmailUnique.middleware";
import {
  createAddressSchema,
  userAttSchema,
  userCreateSchema,
} from "../serializers";
import {
  attUserAddressController,
  attUserInfoController,
  createUserController,
  getUserByIdController,
} from "../controllers";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { isOwnerId } from "../middlewares";

const userRouter: Router = Router();

userRouter.post(
  "",
  validateBodyMiddleware(userCreateSchema),
  isCpfUniqueMiddleware,
  isEmailUniqueMiddleware,
  createUserController
);
userRouter.get("/:id", getUserByIdController);

userRouter.patch(
  "/:id",
  validateBodyMiddleware(userAttSchema),
  validateTokenMiddleware,
  isOwnerId,
  isCpfUniqueMiddleware,
  attUserInfoController
);

userRouter.patch(
  "/:id/address",
  validateBodyMiddleware(createAddressSchema),
  validateTokenMiddleware,
  isOwnerId,
  attUserAddressController
);

export default userRouter;

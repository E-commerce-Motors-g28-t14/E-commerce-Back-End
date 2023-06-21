import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { isCpfUniqueMiddleware } from "../middlewares/isCpfUnique.middleware";
import { isEmailUniqueMiddleware } from "../middlewares/isEmailUnique.middleware";
import {
  getUserProfileController,
  getUsersController,
  recoveryUserPasswordController,
  sendEmailRecoveryController,
} from "../controllers/User.controller";
import {
  createAddressSchema,
  userAttSchema,
  userCreateSchema,
} from "../serializers";
import {
  attUserAddressController,
  attUserInfoController,
  createUserController,
  deleteUserController,
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

userRouter.get("", validateTokenMiddleware, getUsersController);
userRouter.get("/profile", validateTokenMiddleware, getUserProfileController);
userRouter.post("/recovery", sendEmailRecoveryController);
userRouter.patch("/recovery/:id", recoveryUserPasswordController);
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

userRouter.delete(
  "/:id",
  validateTokenMiddleware,
  isOwnerId,
  deleteUserController
);

export default userRouter;

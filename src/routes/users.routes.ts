import { Router } from "express";
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware";
import { isCpfUniqueMiddleware } from "../middlewares/isCpfUnique.middleware";
import { isEmailUniqueMiddleware } from "../middlewares/isEmailUnique.middleware";
import { userCreateSchema } from "../serializers";
import { createUserController } from "../controllers";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import {
  getUserProfileController,
  getUsersController,
  recoveryUserPasswordController,
  sendEmailRecoveryController,
} from "../controllers/User.controller";

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
userRouter.get("/recovery", sendEmailRecoveryController);
userRouter.patch("/recovery/:id", recoveryUserPasswordController);
export default userRouter;

import { Router } from "express"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { isCpfUniqueMiddleware } from "../middlewares/isCpfUnique.middleware"
import { isEmailUniqueMiddleware } from "../middlewares/isEmailUnique.middleware"
import { userCreateSchema } from "../serializers"
import { createUserController, getUserByIdController } from "../controllers"


const userRouter: Router = Router()

userRouter.post("", validateBodyMiddleware(userCreateSchema), isCpfUniqueMiddleware, isEmailUniqueMiddleware, createUserController)
userRouter.get("/:id", getUserByIdController)

export default userRouter
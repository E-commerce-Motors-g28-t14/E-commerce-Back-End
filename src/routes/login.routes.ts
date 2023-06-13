import { Router } from "express"
import { loginUserController } from "../controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { loginUserSchema } from "../serializers/login.serializers"

const loginRouter: Router = Router()

loginRouter.post("", validateBodyMiddleware(loginUserSchema), loginUserController)

export default loginRouter
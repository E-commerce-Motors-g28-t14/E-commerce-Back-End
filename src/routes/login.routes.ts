import { Router } from "express"
import { loginUserController } from "../controllers"
import { validateBodyMiddleware } from "../middlewares/validateBody.middleware"
import { loginUserSchema } from "../serializers/login.serializers"

const loginRouter: Router = Router()

/**
 * @swagger
 * tags:
 *   name: Login
 *   description: User Authentication
 */
/**
 * @swagger
 * /login:
 *   post:arn 
 *     summary: User login
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *             example:
 *               email: "exemple@mail.com"
 *               password: "@Password123"
 *     responses:
 *       200:
 *         description: User login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Authentication token
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized - Invalid credentials
 *       404:
 *         description: User not found
 */
loginRouter.post("", validateBodyMiddleware(loginUserSchema), loginUserController)

export default loginRouter
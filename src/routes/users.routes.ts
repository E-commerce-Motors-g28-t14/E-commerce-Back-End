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


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User Management
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 description: Password of the user
 *               cpf:
 *                 type: string
 *                 description: CPF of the user
 *               isSeller:
 *                 type: boolean
 *                 description: Whether the user is a seller
 *               birthdate:
 *                 type: string
 *                 format: date
 *                 description: Birthdate of the user
 *               phone:
 *                 type: string
 *                 description: Phone number of the user
 *               description:
 *                 type: string
 *                 description: Description of the user
 *               district:
 *                 type: string
 *                 description: District of the user's address
 *               city:
 *                 type: string
 *                 description: City of the user's address
 *               state:
 *                 type: string
 *                 description: State of the user's address
 *               zipCode:
 *                 type: string
 *                 description: ZIP code of the user's address
 *               number:
 *                 type: string
 *                 description: Number of the user's address
 *               complement:
 *                 type: string
 *                 description: Complement of the user's address
 *               color:
 *                 type: number
 *                 description: Color preference of the user
 *           example:
 *             name: "exemple"
 *             email: "exemple@mail.com"
 *             password: "@Password123"
 *             cpf: "11111111122"
 *             isSeller: true
 *             birthdate: "2000-02-02"
 *             phone: "12016026027"
 *             description: ""
 *             district: "123 Main St"
 *             city: "Example City"
 *             state: "sc"
 *             zipCode: "88137010"
 *             number: "12345"
 *             complement: "12345"
 *             color: 2
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the user
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email of the user
 *                 cpf:
 *                   type: string
 *                   description: CPF of the user
 *                 color:
 *                   type: number
 *                   description: Color preference of the user
 *                 birthdate:
 *                   type: string
 *                   format: date-time
 *                   description: Birthdate of the user
 *                 phone:
 *                   type: string
 *                   description: Phone number of the user
 *                 description:
 *                   type: string
 *                   description: Description of the user
 *                 isSeller:
 *                   type: boolean
 *                   description: Whether the user is a seller
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the created user
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of user creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last user update
 *                 address:
 *                   type: object
 *                   properties:
 *                     district:
 *                       type: string
 *                       description: District of the user's address
 *                     zipCode:
 *                       type: string
 *                       description: ZIP code of the user's address
 *                     number:
 *                       type: string
 *                       description: Number of the user's address
 *                     city:
 *                       type: string
 *                       description: City of the user's address
 *                     state:
 *                       type: string
 *                       description: State of the user's address
 *                     complement:
 *                       type: string
 *                       description: Complement of the user's address
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: UUID of the user's address
 *             example:
 *               name: "exemple"
 *               email: "exemple@mail.com"
 *               cpf: "11111111122"
 *               color: 2
 *               birthdate: "2000-02-02T02:00:00.000Z"
 *               phone: "12016026027"
 *               description: null
 *               isSeller: true
 *               id: "31dc9fa2-b825-4d35-a0d7-9ae8f79313c4"
 *               createdAt: "2023-06-27T13:43:03.784Z"
 *               updatedAt: "2023-06-27T13:43:03.784Z"
 *               address:
 *                 district: "123 Main St"
 *                 zipCode: "88137010"
 *                 number: "12345"
 *                 city: "Example City"
 *                 state: "sc"
 *                 complement: "12345"
 *                 id: "b593dd30-5929-4295-bc76-bfc33ee82f29"
 *       400:
 *         description: Error in the request
 */
userRouter.post(
  "",
  validateBodyMiddleware(userCreateSchema),
  isCpfUniqueMiddleware,
  isEmailUniqueMiddleware,
  createUserController
);
 
/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Name of the user
 *                   email:
 *                     type: string
 *                     format: email
 *                     description: Email of the user
 *                   cpf:
 *                     type: string
 *                     description: CPF of the user
 *                   color:
 *                     type: number
 *                     description: Color preference of the user
 *                   birthdate:
 *                     type: string
 *                     format: date-time
 *                     description: Birthdate of the user
 *                   phone:
 *                     type: string
 *                     description: Phone number of the user
 *                   description:
 *                     type: string
 *                     description: Description of the user
 *                   isSeller:
 *                     type: boolean
 *                     description: Whether the user is a seller
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: UUID of the user
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of user creation
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of last user update
 *                   address:
 *                     type: object
 *                     properties:
 *                       district:
 *                         type: string
 *                         description: District of the user's address
 *                       zipCode:
 *                         type: string
 *                         description: ZIP code of the user's address
 *                       number:
 *                         type: string
 *                         description: Number of the user's address
 *                       city:
 *                         type: string
 *                         description: City of the user's address
 *                       state:
 *                         type: string
 *                         description: State of the user's address
 *                       complement:
 *                         type: string
 *                         description: Complement of the user's address
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: UUID of the user's address
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 */

userRouter.get("", validateTokenMiddleware, getUsersController);

/**
 * @swagger
 * /users/profile:
 *   get:
 *     summary: Get user profile
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the user
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email of the user
 *                 cpf:
 *                   type: string
 *                   description: CPF of the user
 *                 color:
 *                   type: number
 *                   description: Color preference of the user
 *                 birthdate:
 *                   type: string
 *                   format: date-time
 *                   description: Birthdate of the user
 *                 phone:
 *                   type: string
 *                   description: Phone number of the user
 *                 description:
 *                   type: string
 *                   description: Description of the user
 *                 isSeller:
 *                   type: boolean
 *                   description: Whether the user is a seller
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the user
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of user creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last user update
 *                 address:
 *                   type: object
 *                   properties:
 *                     district:
 *                       type: string
 *                       description: District of the user's address
 *                     zipCode:
 *                       type: string
 *                       description: ZIP code of the user's address
 *                     number:
 *                       type: string
 *                       description: Number of the user's address
 *                     city:
 *                       type: string
 *                       description: City of the user's address
 *                     state:
 *                       type: string
 *                       description: State of the user's address
 *                     complement:
 *                       type: string
 *                       description: Complement of the user's address
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: UUID of the user's address
 *         
 *       401:
 *         description: Unauthorized - Invalid or missing authentication token
 */
userRouter.get("/profile", validateTokenMiddleware, getUserProfileController);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Name of the user
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: Email of the user
 *                 cpf:
 *                   type: string
 *                   description: CPF of the user
 *                 color:
 *                   type: number
 *                   description: Color preference of the user
 *                 birthdate:
 *                   type: string
 *                   format: date-time
 *                   description: Birthdate of the user
 *                 phone:
 *                   type: string
 *                   description: Phone number of the user
 *                 description:
 *                   type: string
 *                   description: Description of the user
 *                 isSeller:
 *                   type: boolean
 *                   description: Whether the user is a seller
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the user
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of user creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last user update
 *                 address:
 *                   type: object
 *                   properties:
 *                     district:
 *                       type: string
 *                       description: District of the user's address
 *                     zipCode:
 *                       type: string
 *                       description: ZIP code of the user's address
 *                     number:
 *                       type: string
 *                       description: Number of the user's address
 *                     city:
 *                       type: string
 *                       description: City of the user's address
 *                     state:
 *                       type: string
 *                       description: State of the user's address
 *                     complement:
 *                       type: string
 *                       description: Complement of the user's address
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: UUID of the user's address
 *       404:
 *         description: User not found
 */
userRouter.get("/:id", getUserByIdController);


 
/**
 * @swagger
 * /users/{id}:
 *   patch:
 *     summary: Update user information
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/serializer/UserUpdateInput'
 *     responses:
 *       200:
 *         description: User information updated successfully
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized - Invalid token
 *       403:
 *         description: Forbidden - Not the owner of the user
 *       404:
 *         description: User not found
 */
userRouter.patch(
  "/:id",
  validateBodyMiddleware(userAttSchema),
  validateTokenMiddleware,
  isOwnerId,
  isCpfUniqueMiddleware,
  attUserInfoController
);

 
/**
 * @swagger
 * /users/{id}/address:
 *   patch:
 *     summary: Update user address
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/serializer/AddressInput'
 *     responses:
 *       200:
 *         description: User address updated successfully
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized - Invalid token
 *       403:
 *         description: Forbidden - Not the owner of the user
 *       404:
 *         description: User not found
 */
userRouter.patch(
  "/:id/address",
  validateBodyMiddleware(createAddressSchema),
  validateTokenMiddleware,
  isOwnerId,
  attUserAddressController
);

 
/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to delete
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       401:
 *         description: Unauthorized - Token invalid or expired
 *       403:
 *         description: Forbidden - User is not the owner of the resource
 *       404:
 *         description: User not found
 */
userRouter.delete(
  "/:id",
  validateTokenMiddleware,
  isOwnerId,
  deleteUserController
);

 
/**
 * @swagger
 * /users/recovery:
 *   post:
 *     summary: Send password recovery email
 *     tags: [Users]
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
 *             example:
 *               email: "exemple@mail.com"
 *     responses:
 *       200:
 *         description: Password recovery email sent successfully
 *       400:
 *         description: Error in the request
 *       404:
 *         description: User not found
 */
userRouter.post("/recovery", sendEmailRecoveryController);

 
/**
 * @swagger
 * /users/recovery/{id}:
 *   patch:
 *     summary: Reset user password
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the user to reset the password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 description: New password for the user
 *             example:
 *               password: "@NewPassword123"
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Error in the request
 *       404:
 *         description: User not found
 */
userRouter.patch("/recovery/:id", recoveryUserPasswordController);

export default userRouter;

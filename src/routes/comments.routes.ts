import { Router } from "express";
import {
<<<<<<< HEAD
    CreateCommentController,
    GetCommentsController,
    GetCommentsByIDController,
    DeleteCommentsController,
    UpdateCommentController
} from "../controllers";
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';
import { isSellerMiddleware } from '../middlewares/isSeller.middleware';
import { verifyCarExistsMiddleware } from "../middlewares";
 


=======
  CreateCommentController,
  GetCommentsController,
  GetCommentsByIDController,
  DeleteCommentsController,
} from "../controllers";
import { validateTokenMiddleware } from "../middlewares/validateToken.middleware";
import { isSellerMiddleware } from "../middlewares/isSeller.middleware";
import { verifyCarExistsMiddleware } from "../middlewares";
>>>>>>> d3a9893bb6947fbafb559abb1658a3928b257ffb

const commentRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: Comments Management
 */
/**
 * @swagger
 * /comments:
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *                 description: Comment content
 *               car:
 *                 type: string
 *                 format: uuid
 *                 description: ID of the car related to the comment
 *           example:
 *             comment: "Novo comentário!"
 *             car: "ee204f96-b570-4126-822f-9312490e8c20"
 *     responses:
 *       201:
 *         description: Comment created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: ID of the created comment
 *                 comment:
 *                   type: string
 *                   description: Comment content
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of comment creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last comment update
 *                 car:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: ID of the car related to the comment
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: ID of the user creating the comment
 *             example:
 *               id: "1e1e5232-d7bb-4f80-ba74-426f5a12c6c1"
 *               comment: "Novo comentário!"
 *               createdAt: "2023-06-27T14:30:00.994Z"
 *               updatedAt: "2023-06-27T14:30:00.994Z"
 *               car:
 *                 car{}
 *               user:
 *                 user{}
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized access
 */
commentRouter.post("", validateTokenMiddleware, CreateCommentController);

/**
 * @swagger
 * /comments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     format: uuid
 *                     description: ID of the comment
 *                   comment:
 *                     type: string
 *                     description: Comment content
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of comment creation
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of last comment update
 *                   car:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: ID of the car related to the comment
 *                       brand:
 *                         type: string
 *                         description: Brand of the car
 *                       model:
 *                         type: string
 *                         description: Model of the car
 *                       year:
 *                         type: integer
 *                         description: Year of the car
 *                       fuel:
 *                         type: integer
 *                         description: Fuel type of the car
 *                       km:
 *                         type: integer
 *                         description: Mileage of the car
 *                       color:
 *                         type: string
 *                         description: Color of the car
 *                       isPromo:
 *                         type: boolean
 *                         description: Whether the car is in promotion
 *                       price:
 *                         type: string
 *                         description: Price of the car
 *                       description:
 *                         type: string
 *                         description: Description of the car
 *                       isActive:
 *                         type: boolean
 *                         description: Whether the car is active
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time of car creation
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time of last car update
 *                       photos:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             id:
 *                               type: string
 *                               format: uuid
 *                               description: ID of the car photo
 *                             imageLink:
 *                               type: string
 *                               description: Link to the car photo
 *                             isCover:
 *                               type: boolean
 *                               description: Whether the photo is the cover photo of the car
 *                   user:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: ID of the user creating the comment
 *                       name:
 *                         type: string
 *                         description: Name of the user
 *                       password:
 *                         type: string
 *                         description: Password of the user
 *                       email:
 *                         type: string
 *                         format: email
 *                         description: Email of the user
 *                       cpf:
 *                         type: string
 *                         description: CPF of the user
 *                       birthdate:
 *                         type: string
 *                         format: date-time
 *                         description: Birthdate of the user
 *                       phone:
 *                         type: string
 *                         description: Phone number of the user
 *                       description:
 *                         type: string
 *                         description: Description of the user
 *                       isSeller:
 *                         type: boolean
 *                         description: Whether the user is a seller
 *                       color:
 *                         type: integer
 *                         description: Color code of the user
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time of user creation
 *                       updatedAt:
 *                         type: string
 *                         format: date-time
 *                         description: Date and time of last user update
 *             example:
 *               - id: "1e1e5232-d7bb-4f80-ba74-426f5a12c6c1"
 *                 comment: "Novo comentário!"
 *                 createdAt: "2023-06-27T14:30:00.994Z"
 *                 updatedAt: "2023-06-27T14:30:00.994Z"
 *                 car:
 *                   id: "ee204f96-b570-4126-822f-9312490e8c20"
 *                   brand: "Toyota"
 *                   model: "Corolla"
 *                   year: 1991
 *                   fuel: 1
 *                   km: 92000
 *                   color: "blue"
 *                   isPromo: false
 *                   price: "92000"
 *                   description: "Carro para teste!"
 *                   isActive: true
 *                   createdAt: "2023-06-24T22:59:53.078Z"
 *                   updatedAt: "2023-06-24T22:59:53.078Z"
 *                   photos:
 *                     - id: "4915fbf2-0b55-4065-852a-fb3161421774"
 *                       imageLink: "https://example.com/photo1.jpg"
 *                       isCover: true
 *                 user:
 *                   id: "d39c2737-503d-4881-bc48-9ba2147ca15c"
 *                   name: "teste"
 *                   password: "$2a$10$JUFGRn2X2ooBx5dvv/eWo.J9OoV77an1ICEamaz.ppUyE7I7UOu7i"
 *                   email: "annekarolle@mail.com"
 *                   cpf: "034515481445"
 *                   birthdate: "2000-02-02T02:00:00.000Z"
 *                   phone: "12016026027"
 *                   description: null
 *                   isSeller: true
 *                   color: 2
 *                   createdAt: "2023-06-24T20:26:05.802Z"
 *                   updatedAt: "2023-06-24T20:26:05.802Z"
 *
 */

commentRouter.get("", GetCommentsController);

/**
 * @swagger
 * /comments/cars/:{id}:
 *   get:
 *     summary: Get comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the comment to retrieve
 *         required: true
 *     responses:
 *       200:
 *         description: Comment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: ID of the comment
 *                 comment:
 *                   type: string
 *                   description: The comment itself
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of comment creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last comment update
 *                 car:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: ID of the car
 *                     brand:
 *                       type: string
 *                       description: Brand of the car
 *                     model:
 *                       type: string
 *                       description: Model of the car
 *                     year:
 *                       type: integer
 *                       description: Year of the car
 *                     fuel:
 *                       type: integer
 *                       description: Fuel type of the car
 *                     km:
 *                       type: integer
 *                       description: Kilometers driven by the car
 *                     color:
 *                       type: string
 *                       description: Color of the car
 *                     isPromo:
 *                       type: boolean
 *                       description: Whether the car is on promotion
 *                     price:
 *                       type: string
 *                       description: Price of the car
 *                     description:
 *                       type: string
 *                       description: Description of the car
 *                     isActive:
 *                       type: boolean
 *                       description: Whether the car is active
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of car creation
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of last car update
 *                     photos:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           id:
 *                             type: string
 *                             format: uuid
 *                             description: ID of the car photo
 *                           imageLink:
 *                             type: string
 *                             description: Link to the car photo
 *                           isCover:
 *                             type: boolean
 *                             description: Whether the photo is the cover photo of the car
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: ID of the user creating the comment
 *                     name:
 *                       type: string
 *                       description: Name of the user
 *                     email:
 *                       type: string
 *                       format: email
 *                       description: Email of the user
 *                     cpf:
 *                       type: string
 *                       description: CPF of the user
 *                     birthdate:
 *                       type: string
 *                       format: date-time
 *                       description: Birthdate of the user
 *                     phone:
 *                       type: string
 *                       description: Phone number of the user
 *                     description:
 *                       type: string
 *                       description: Description of the user
 *                     isSeller:
 *                       type: boolean
 *                       description: Whether the user is a seller
 *                     color:
 *                       type: integer
 *                       description: Color code of the user
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of user creation
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of last user update
 */

commentRouter.get(  "/cars/:id", verifyCarExistsMiddleware, GetCommentsByIDController);



/**
 * @swagger
 * /comments/{id}:
 *   patch:
 *     summary: Update a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the comment to update
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               comment:
 *                 type: string
 *                 description: Updated comment text
 *             required:
 *               - comment
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized access
 *       403:
 *         description: Forbidden operation
 *       404:
 *         description: Comment not found
 */

commentRouter.patch("/:id", validateTokenMiddleware, UpdateCommentController);
   


/**
 * @swagger
 * /comments/{id}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the comment to delete
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       204:
 *         description: Comment deleted successfully
 *       401:
 *         description: Unauthorized access
 *       403:
 *         description: Forbidden operation
 *       404:
 *         description: Comment not found
 */
commentRouter.delete("/:id", validateTokenMiddleware, DeleteCommentsController);

export default commentRouter;

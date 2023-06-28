import { Router } from "express";
import {
  CreateCarController,
  GetCarsController,
  GetCarsInfoController,
  RemoveCarController,
  UpdateCarController,
  getCarByIdController
} from "../controllers";
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';
import { isSellerMiddleware } from '../middlewares/isSeller.middleware';
const carRouter: Router = Router();

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: Cars Management
 */
/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Create a new car
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 description: Brand of the car
 *               model:
 *                 type: string
 *                 description: Model of the car
 *               year:
 *                 type: integer
 *                 description: Year of the car
 *               fuel:
 *                 type: integer
 *                 description: Type of fuel (1 - Gasoline, 2 - Ethanol, 3 - Flex Fuel, 4 - Diesel, 5 - Hybrid, 6 - Electric)
 *               km:
 *                 type: integer
 *                 description: Mileage of the car
 *               color:
 *                 type: string
 *                 description: Color of the car
 *               fipePrice:
 *                 type: string
 *                 description: FIPE price of the car
 *               price:
 *                 type: string
 *                 description: Price of the car
 *               description:
 *                 type: string
 *                 description: Description of the car
 *               photos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     imageLink:
 *                       type: string
 *                       description: Link to the car's photo
 *                     isCover:
 *                       type: boolean
 *                       description: Indicates if the photo is the car's cover photo
 *     responses:
 *       201:
 *         description: Car created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the created car
 *                 brand:
 *                   type: string
 *                   description: Brand of the car
 *                 model:
 *                   type: string
 *                   description: Model of the car
 *                 year:
 *                   type: integer
 *                   description: Year of the car
 *                 fuel:
 *                   type: integer
 *                   description: Type of fuel (1 - Gasoline, 2 - Ethanol, 3 - Flex Fuel, 4 - Diesel, 5 - Hybrid, 6 - Electric)
 *                 km:
 *                   type: integer
 *                   description: Mileage of the car
 *                 color:
 *                   type: string
 *                   description: Color of the car
 *                 isPromo:
 *                   type: boolean
 *                   description: Indicates if the car is on promotion
 *                 price:
 *                   type: string
 *                   description: Price of the car
 *                 description:
 *                   type: string
 *                   description: Description of the car
 *                 isActive:
 *                   type: boolean
 *                   description: Indicates if the car is active
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of car creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last car update
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: UUID of the car photo
 *                       imageLink:
 *                         type: string
 *                         description: Link to the car's photo
 *                       isCover:
 *                         type: boolean
 *                         description: Indicates if the photo is the car's cover photo
 *             example:
 *               id: "8f547ff1-58e8-49d5-8a7f-c6108c8ed83d"
 *               brand: "Toyota"
 *               model: "Corolla"
 *               year: 1991
 *               fuel: 1
 *               km: 92000
 *               color: "blue"
 *               isPromo: false
 *               price: "92000"
 *               description: "Carro para teste!"
 *               isActive: true
 *               createdAt: "2023-06-27T14:20:00.994Z"
 *               updatedAt: "2023-06-27T14:20:00.994Z"
 *               photos:
 *                 - id: "420bc514-4a6f-4c02-a2c2-2fc7bd79ebb1"
 *                   imageLink: "https://example.com/photo1.jpg"
 *                   isCover: true
 */

carRouter.post("", validateTokenMiddleware, isSellerMiddleware, CreateCarController);

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Get all cars
 *     tags: [Cars]
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
 *                     description: UUID of the car
 *                   brand:
 *                     type: string
 *                     description: Brand of the car
 *                   model:
 *                     type: string
 *                     description: Model of the car
 *                   year:
 *                     type: integer
 *                     description: Year of the car
 *                   fuel:
 *                     type: integer
 *                     description: Type of fuel (1 - Gasoline, 2 - Ethanol, 3 - Flex Fuel, 4 - Diesel, 5 - Hybrid, 6 - Electric)
 *                   km:
 *                     type: integer
 *                     description: Mileage of the car
 *                   color:
 *                     type: string
 *                     description: Color of the car
 *                   isPromo:
 *                     type: boolean
 *                     description: Indicates if the car is on promotion
 *                   price:
 *                     type: string
 *                     description: Price of the car
 *                   description:
 *                     type: string
 *                     description: Description of the car
 *                   isActive:
 *                     type: boolean
 *                     description: Indicates if the car is active
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of car creation
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     description: Date and time of last car update
 *                   photos:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           format: uuid
 *                           description: UUID of the car photo
 *                         imageLink:
 *                           type: string
 *                           description: Link to the car's photo
 *                         isCover:
 *                           type: boolean
 *                           description: Indicates if the photo is the car's cover photo
 *             example:
 *               - id: "8f547ff1-58e8-49d5-8a7f-c6108c8ed83d"
 *                 brand: "Toyota"
 *                 model: "Corolla"
 *                 year: 1991
 *                 fuel: 1
 *                 km: 92000
 *                 color: "blue"
 *                 isPromo: false
 *                 price: "92000"
 *                 description: "Carro para teste!"
 *                 isActive: true
 *                 createdAt: "2023-06-27T14:20:00.994Z"
 *                 updatedAt: "2023-06-27T14:20:00.994Z"
 *                 photos:
 *                   - id: "420bc514-4a6f-4c02-a2c2-2fc7bd79ebb1"
 *                     imageLink: "https://example.com/photo1.jpg"
 *                     isCover: true
 */
carRouter.get("", GetCarsController);
carRouter.get("/infos", GetCarsInfoController);

/**
 * @swagger
 * /cars/{id}:
 *   get:
 *     summary: Get car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the car to retrieve
 *         required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the car
 *                 brand:
 *                   type: string
 *                   description: Brand of the car
 *                 model:
 *                   type: string
 *                   description: Model of the car
 *                 year:
 *                   type: integer
 *                   description: Year of the car
 *                 fuel:
 *                   type: integer
 *                   description: Type of fuel (1 - Gasoline, 2 - Ethanol, 3 - Flex Fuel, 4 - Diesel, 5 - Hybrid, 6 - Electric)
 *                 km:
 *                   type: integer
 *                   description: Mileage of the car
 *                 color:
 *                   type: string
 *                   description: Color of the car
 *                 isPromo:
 *                   type: boolean
 *                   description: Indicates if the car is on promotion
 *                 price:
 *                   type: string
 *                   description: Price of the car
 *                 description:
 *                   type: string
 *                   description: Description of the car
 *                 isActive:
 *                   type: boolean
 *                   description: Indicates if the car is active
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of car creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last car update
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: UUID of the car photo
 *                       imageLink:
 *                         type: string
 *                         description: Link to the car's photo
 *                       isCover:
 *                         type: boolean
 *                         description: Indicates if the photo is the car's cover photo
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       description: UUID of the user who owns the car
 *                     name:
 *                       type: string
 *                       description: Name of the user who owns the car
 *                     password:
 *                       type: string
 *                       description: Password of the user who owns the car
 *                     email:
 *                       type: string
 *                       description: Email of the user who owns the car
 *                     cpf:
 *                       type: string
 *                       description: CPF of the user who owns the car
 *                     birthdate:
 *                       type: string
 *                       format: date-time
 *                       description: Birthdate of the user who owns the car
 *                     phone:
 *                       type: string
 *                       description: Phone number of the user who owns the car
 *                     description:
 *                       type: string
 *                       description: Description of the user who owns the car
 *                     isSeller:
 *                       type: boolean
 *                       description: Indicates if the user is a seller
 *                     color:
 *                       type: integer
 *                       description: Color of the user who owns the car
 *                     createdAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of user creation
 *                     updatedAt:
 *                       type: string
 *                       format: date-time
 *                       description: Date and time of last user update
 */
carRouter.get("/:id", getCarByIdController);

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Update car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the car to update
 *         required: true
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         description: JWT token for authentication
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               brand:
 *                 type: string
 *                 description: Brand of the car
 *               model:
 *                 type: string
 *                 description: Model of the car
 *               year:
 *                 type: integer
 *                 description: Year of the car
 *               fuel:
 *                 type: integer
 *                 description: Type of fuel (1 - Gasoline, 2 - Ethanol, 3 - Flex Fuel, 4 - Diesel, 5 - Hybrid, 6 - Electric)
 *               km:
 *                 type: integer
 *                 description: Mileage of the car
 *               color:
 *                 type: string
 *                 description: Color of the car
 *               isPromo:
 *                 type: boolean
 *                 description: Indicates if the car is on promotion
 *               price:
 *                 type: string
 *                 description: Price of the car
 *               description:
 *                 type: string
 *                 description: Description of the car
 *               photos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     imageLink:
 *                       type: string
 *                       description: Link to the car's photo
 *                     isCover:
 *                       type: boolean
 *                       description: Indicates if the photo is the car's cover photo
 *             example:
 *               brand: "Toyota"
 *               model: "Corolla"
 *               year: 1991
 *               fuel: 1
 *               km: 92000
 *               color: "blue"
 *               isPromo: false
 *               price: "92000"
 *               description: "Updated car for testing"
 *               photos:
 *                 - imageLink: "https://example.com/photo1.jpg"
 *                   isCover: true
 *     responses:
 *       200:
 *         description: Car updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   format: uuid
 *                   description: UUID of the updated car
 *                 brand:
 *                   type: string
 *                   description: Brand of the updated car
 *                 model:
 *                   type: string
 *                   description: Model of the updated car
 *                 year:
 *                   type: integer
 *                   description: Year of the updated car
 *                 fuel:
 *                   type: integer
 *                   description: Type of fuel of the updated car
 *                 km:
 *                   type: integer
 *                   description: Mileage of the updated car
 *                 color:
 *                   type: string
 *                   description: Color of the updated car
 *                 isPromo:
 *                   type: boolean
 *                   description: Indicates if the updated car is on promotion
 *                 price:
 *                   type: string
 *                   description: Price of the updated car
 *                 description:
 *                   type: string
 *                   description: Description of the updated car
 *                 isActive:
 *                   type: boolean
 *                   description: Indicates if the updated car is active
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of car creation
 *                 updatedAt:
 *                   type: string
 *                   format: date-time
 *                   description: Date and time of last car update
 *                 photos:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         format: uuid
 *                         description: UUID of the car photo
 *                       imageLink:
 *                         type: string
 *                         description: Link to the car photo
 *                       isCover:
 *                         type: boolean
 *                         description: Indicates if the photo is the car's cover photo
 *             example:
 *               id: "ee204f96-b570-4126-822f-9312490e8c20"
 *               brand: "Toyota"
 *               model: "Corolla"
 *               year: 1991
 *               fuel: 1
 *               km: 92000
 *               color: "blue"
 *               isPromo: false
 *               price: "92000"
 *               description: "Updated car for testing"
 *               isActive: true
 *               createdAt: "2023-06-24T22:59:53.078Z"
 *               updatedAt: "2023-06-24T22:59:53.078Z"
 *               photos:
 *                 - id: "4915fbf2-0b55-4065-852a-fb3161421774"
 *                   imageLink: "https://example.com/photo1.jpg"
 *                   isCover: true
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized access
 *       403:
 *         description: Forbidden access
 *       404:
 *         description: Car not found
 */
carRouter.put("/:id", validateTokenMiddleware, isSellerMiddleware, UpdateCarController);

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Remove car by ID
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *           format: uuid
 *         description: ID of the car to remove
 *         required: true
 *       - in: header
 *         name: Authorization
 *         schema:
 *           type: string
 *         description: JWT token for authentication
 *         required: true
 *     responses:
 *       204:
 *         description: Car removed successfully
 *       400:
 *         description: Error in the request
 *       401:
 *         description: Unauthorized access
 *       403:
 *         description: Forbidden access
 *       404:
 *         description: Car not found
 */
carRouter.delete("/:id", validateTokenMiddleware, isSellerMiddleware, RemoveCarController);

export default carRouter;

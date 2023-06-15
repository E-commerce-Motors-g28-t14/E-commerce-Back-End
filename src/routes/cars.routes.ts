import { Router } from "express";
import {
  CreateCarController,
  GetCarsController,
  GetCarsInfoController,
  RemoveCarController,
  UpdateCarController,
} from "../controllers";
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';
import { isSellerMiddleware } from '../middlewares/isSeller.middleware';
const carRouter: Router = Router();

carRouter.post("", validateTokenMiddleware, isSellerMiddleware, CreateCarController);
carRouter.get("", GetCarsController);
carRouter.get("/infos", GetCarsInfoController);
carRouter.put("/:id", validateTokenMiddleware, isSellerMiddleware, UpdateCarController);
carRouter.delete("/:id", validateTokenMiddleware, isSellerMiddleware, RemoveCarController);

export default carRouter;

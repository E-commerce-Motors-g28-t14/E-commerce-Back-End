import { Router } from "express";
import {
  CreateCarController,
  GetCarsController,
  UpdateCarController,
} from "../controllers";

const carRouter: Router = Router();

carRouter.post("", CreateCarController);
carRouter.get("", GetCarsController);
carRouter.patch("/:id", UpdateCarController);

export default carRouter;

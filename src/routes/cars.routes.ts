import { Router } from "express";
import {
  CreateCarController,
  GetCarsController,
  RemoveCarController,
  UpdateCarController,
} from "../controllers";

const carRouter: Router = Router();

carRouter.post("", CreateCarController);
carRouter.get("", GetCarsController);
carRouter.put("/:id", UpdateCarController);
carRouter.delete("/:id", RemoveCarController);

export default carRouter;

import { Router } from "express";
import {
  CreateCarController,
  GetCarsController,
  GetCarsInfoController,
  RemoveCarController,
  UpdateCarController,
} from "../controllers";

const carRouter: Router = Router();

carRouter.post("", CreateCarController);
carRouter.get("", GetCarsController);
carRouter.get("/infos", GetCarsInfoController);
carRouter.put("/:id", UpdateCarController);
carRouter.delete("/:id", RemoveCarController);

export default carRouter;

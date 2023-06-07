import { Router } from "express";
import { CreateCarController, GetCarsController } from "../controllers";

const carRouter: Router = Router();

carRouter.post("", CreateCarController);
carRouter.get("", GetCarsController);

export default carRouter;

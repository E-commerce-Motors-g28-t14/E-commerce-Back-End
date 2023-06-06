import { Router } from "express";
import {
  CarController,
  GetCarsController,
} from "../controllers/Car.Controller";

const carRouter = Router();

carRouter.post("/cars", CarController);
carRouter.get("/cars", GetCarsController);

export default carRouter;

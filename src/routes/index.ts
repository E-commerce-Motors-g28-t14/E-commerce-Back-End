import { Router } from "express";
import { CarController } from "../controllers/Car.Controller";

const carRouter = Router();

carRouter.post("/cars", CarController);

export default carRouter;

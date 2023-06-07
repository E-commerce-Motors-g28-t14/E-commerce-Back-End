import "reflect-metadata";
import "express-async-errors";
import { HandleError } from "./errors";
import express, { Application } from "express";
import cors from "cors";
import { carRouter } from "./routes";

const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/cars", carRouter);
app.use(HandleError);

export default app;

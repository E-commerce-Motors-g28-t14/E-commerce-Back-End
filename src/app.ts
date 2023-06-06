import "reflect-metadata";
import "express-async-errors";
import { HandleError } from "./errors";
import express from "express";
import cors from "cors";
import carRouter from "./routes";

const app = express();
app.use(cors());
app.use(express.json());
app.use(carRouter);
app.use(HandleError);

export default app;

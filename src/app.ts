import "reflect-metadata";
import "express-async-errors";
import { HandleError } from "./errors";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(HandleError);

export default app;

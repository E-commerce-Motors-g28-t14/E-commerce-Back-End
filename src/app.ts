import "reflect-metadata";
import "express-async-errors";
import { HandleError } from "./errors";
import express, { Application } from "express";
import cors from "cors";
import { carRouter, loginRouter, userRouter, commentRouter } from "./routes";
 

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use("/cars", carRouter);
app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/comments", commentRouter)
app.use(userRouter);

app.use(HandleError);

export default app;

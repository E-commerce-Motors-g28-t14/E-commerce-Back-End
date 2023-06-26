import { Router } from "express";
import {
    CreateCommentController,
    GetCommentsController,
    GetCommentsByIDController,
    DeleteCommentsController
} from "../controllers";
import { validateTokenMiddleware } from '../middlewares/validateToken.middleware';
import { isSellerMiddleware } from '../middlewares/isSeller.middleware';



const commentRouter: Router = Router();

commentRouter.post("", validateTokenMiddleware, isSellerMiddleware, CreateCommentController);
commentRouter.get("", GetCommentsController); 
commentRouter.get("/:id", GetCommentsByIDController); 
commentRouter.delete("/:id", validateTokenMiddleware, isSellerMiddleware, DeleteCommentsController);

export default commentRouter;

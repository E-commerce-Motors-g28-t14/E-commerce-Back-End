import AppDataSource from "../../data-source";
import { Car, User, Comment } from "../../entities";
 
 

export const GetCommentsService = async (): Promise <Comment[]> => {
  const commentRepository = AppDataSource.getRepository(Comment);

  const comments = await commentRepository.find({
    relations: { user: true, car: true },
  });


  if (!comments) throw new Error("User not found");

  return comments
   
};

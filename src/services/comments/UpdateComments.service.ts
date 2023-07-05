import AppDataSource from "../../data-source";
import { Comment } from "../../entities";

export const UpdateCommentService = async (id: string, comment: string): Promise<Comment> => {
  const commentRepo = AppDataSource.getRepository(Comment);
 
  console.log(id + "iddddddddddddddddddddddddddd")
  console.log(typeof(id))

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh" + comment)
  const foundComment: Comment | undefined = await commentRepo.findOne({
    where: { id: id },
  });

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh comentario encontrado" + foundComment.comment)

  if (!foundComment) {
    throw new Error('Comment not found.');
  }
  
 
  foundComment.comment = comment || foundComment.comment;  

  await commentRepo.save(foundComment);

  const commentUpdated = await commentRepo.findOne({
    where: { id: id },
    relations: { user: true, car: true },
  });

   

  return commentUpdated;

};

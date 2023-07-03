import AppDataSource from "../../data-source";
import { Comment } from "../../entities";

export const UpdateCommentService = async (id: string, comment: string): Promise<Comment> => {
  const commentRepo = AppDataSource.getRepository(Comment);

  const foundComment: Comment | undefined = await commentRepo.findOne({
    where: { id: id },
  });

  if (!foundComment) {
    throw new Error('Comment not found.');
  }
  ;
  const newdate = new Date();

  foundComment.comment = comment || foundComment.comment;
  foundComment.updatedAt = newdate || foundComment.updatedAt;

  await commentRepo.save(foundComment);


  const commentUpdated = await commentRepo.findOne({
    where: { id: id },
    relations: { user: true, car: true },
  });

  return commentUpdated!;



};

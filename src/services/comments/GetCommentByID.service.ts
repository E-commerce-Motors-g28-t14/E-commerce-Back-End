import AppDataSource from "../../data-source";
import { Car, Comment } from "../../entities";

export const GetCommentsByIDService = async (id: string): Promise<Comment | null> => {
  const CommentRepo = AppDataSource.getRepository(Comment);

  const comment: Comment | undefined = await CommentRepo.findOne({
    where: { id: id },
    relations: { user: true, car: true },
  });

  return comment || null;
};

 
import { photoRepository } from "../../repositories";
import { Comment } from "../../entities";
import AppDataSource from "../../data-source";

export const DeleteCommentsService = async (id: string): Promise<void> => {

  const commentRepository = AppDataSource.getRepository(Comment);

  const coments: Comment = await commentRepository.findOneBy({ id: id });

  await commentRepository.remove(coments);
};

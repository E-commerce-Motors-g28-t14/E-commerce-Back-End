import AppDataSource from "../../data-source";
import { Car, Comment } from "../../entities";
import { carRepository } from "../../repositories";

export const GetCommentsByIDService = async (id: string) => {
  const CommentRepo = AppDataSource.getRepository(Comment);

  const car: Car | undefined = await carRepository.findOne({
    where: { id: id },
    relations: { comments: { user: true } },
  });

  const comments = car.comments.map((element) => {
    const { user, ...payload } = element;

    return { ...payload, user: { id: user.id, name: user.name, color: user.color} };
  });

  return comments;
};

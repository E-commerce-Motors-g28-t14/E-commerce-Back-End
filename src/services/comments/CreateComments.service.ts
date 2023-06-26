

import { getRepository } from "typeorm";

import { ICommentRequest, ICommentResponse } from "../../interfaces/comments.interfaces";
import { Car, User, Comment } from "../../entities";
import AppDataSource from "../../data-source";

export const CreateCommentService = async (data : ICommentRequest,   idUser: string,  idCar: string): Promise<ICommentResponse> => {

  const userRepository = AppDataSource.getRepository(User);
  const carRepository = AppDataSource.getRepository(Car);
  const commentRepository = AppDataSource.getRepository(Comment);

  const user = await userRepository.findOne({ where: { id: idUser } });
  if (!user) throw new Error("User not found");

  const car = await carRepository.findOne({ where: { id: idCar } });
  if (!car) throw new Error("Car not found");

  const commentData  = {
    comment: data.comment.comment,  
    user: user,
    car: car,
  };

  const newComment = commentRepository.create(commentData);

  await commentRepository.save(newComment);

  // const commentResponse: ICommentResponse = {
  //   id: newComment.id,
  //   comment: data.comment,
  //   user: user,  
  //   car: car,  
  // };

  return newComment;
}
import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";
import { userRepository } from "../../repositories";

export const getUserByIdService = async (id: string): Promise<User | null> => {
  const userRepo = AppDataSource.getRepository(User);

  const user: User | undefined = await userRepo.findOne({
    where: { id: id },
    relations: { cars: { photos: true }, address: true },
  });

  return user || null;
};

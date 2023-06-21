import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";

export const getUsersService = async (): Promise<User[] | null> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.find();

  return user;
};

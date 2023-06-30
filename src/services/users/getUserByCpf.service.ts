import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";

export const getUserByCpfService = async (
  cpf: string
): Promise<User | null> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const user: User | null = await userRepo.findOneBy({
    cpf: cpf,
  });

  return user;
};

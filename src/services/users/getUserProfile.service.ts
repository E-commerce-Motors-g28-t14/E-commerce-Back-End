import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";

export const getUserProfileService = async (
  id: string
): Promise<User | null> => {
  console.log(id);
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({
    where: { id: id },
    relations: {
      cars: true,
      address: true,
    },
  });

  return user;
};

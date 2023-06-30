import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";
import { userWithoutAddressReturnSchema } from "../../serializers/users.serializers";
import { iUserWithoutAddress } from "../../interfaces/User.interfaces";

export const getUsersService = async (): Promise<
  iUserWithoutAddress[] | null
> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.find();

  const usersReturn = user.map((element) =>
    userWithoutAddressReturnSchema.parse(element)
  );
  return usersReturn;
};

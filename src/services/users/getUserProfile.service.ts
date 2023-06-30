import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";
import { userCreateReturnSchema } from "../../serializers";
import {
  iUserCreateReturn,
  iUserWithAddressAndCarsAndPhotos,
} from "../../interfaces/User.interfaces";

export const getUserProfileService = async (
  id: string
): Promise<iUserWithAddressAndCarsAndPhotos | null> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user = await userRepo.findOne({
    where: { id: id },
    relations: {
      cars: { photos: true },
      address: true,
    },
  });

  const { cars, ...payload } = user;

  const userReturn = userCreateReturnSchema.parse(payload);

  return { ...userReturn, cars: cars };
};

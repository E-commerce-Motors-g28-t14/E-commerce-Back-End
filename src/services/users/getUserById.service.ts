import { Repository } from "typeorm";
import { User } from "../../entities";
import AppDataSource from "../../data-source";
import { userRepository } from "../../repositories";
import { AppError } from "../../errors";
import {
  userCreateReturnSchema,
  userWithoutAddressReturnSchema,
} from "../../serializers/users.serializers";
import { iUserWithCarsAndPhoto } from "../../interfaces/User.interfaces";

export const getUserByIdService = async (
  id: string
): Promise<iUserWithCarsAndPhoto> => {
  const userRepo = AppDataSource.getRepository(User);

  const user: User | undefined = await userRepo.findOne({
    where: { id: id },
    relations: { cars: { photos: true } },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }
  const { cars, ...payload } = user;

  const userReturn = userWithoutAddressReturnSchema.parse(payload);

  return { ...userReturn, cars: cars };
};

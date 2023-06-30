import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { iCarWithPhotoAndUser } from "../../interfaces/Cars.interfaces";
import { userCreateReturnSchema } from "../../serializers";
import { carWithPhotosAndUserSchema } from "../../serializers/cars.serializers";
import { userWithoutAddressReturnSchema } from "../../serializers/users.serializers";

export const getCarByIdService = async (
  id: string
): Promise<iCarWithPhotoAndUser | null> => {
  const carRepo = AppDataSource.getRepository(Car);

  const car: Car | undefined = await carRepo.findOne({
    where: { id: id },
    relations: { photos: true, user: true },
  });

  const { user, ...payload } = car;

  const userReturn = userWithoutAddressReturnSchema.parse(user);

  const carReturn = { ...payload, user: userReturn };

  return carReturn || null;
};

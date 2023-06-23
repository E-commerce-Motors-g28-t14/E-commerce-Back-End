import AppDataSource from "../../data-source";
import { Car } from "../../entities";

export const getCarByIdService = async (id: string): Promise<Car | null> => {
  const carRepo = AppDataSource.getRepository(Car);

  const car: Car | undefined = await carRepo.findOne({
    where: { id: id },
    relations: { photos: true, user: true },
  });

  return car || null;
};

import { Car } from "../../entities";
import { carRepository, photoRepository } from "../../repositories";

export const RemoveCarService = async (carId: string): Promise<void> => {
  const car: Car = await carRepository.findOneBy({ id: carId });

  const photos = await photoRepository.find({
    where: {
      car: {
        id: carId,
      },
    },
  });

  await photoRepository.remove(photos);

  await carRepository.remove(car);
};

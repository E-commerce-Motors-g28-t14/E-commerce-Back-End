import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { carRepository } from "../../repositories";

export const getCarByIdService = async (id: string): Promise<Car | null> => {
    const carRepo = AppDataSource.getRepository(Car);
    
    const car: Car | undefined = await carRepo.findOne({where:{id: id}});
    
    return car || null;
};
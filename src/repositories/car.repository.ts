import AppDataSource from "../data-source";
import { Car } from "../entities";

export const carRepository = AppDataSource.getRepository(Car);

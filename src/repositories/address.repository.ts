import AppDataSource from "../data-source";
import { Adress } from "../entities";

export const addressRepository = AppDataSource.getRepository(Adress);

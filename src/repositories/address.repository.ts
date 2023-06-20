import AppDataSource from "../data-source";
import { Address } from "../entities";

export const addressRepository = AppDataSource.getRepository(Address);

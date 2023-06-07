import AppDataSource from "../data-source";
import { Photo } from "../entities";

export const photoRepository = AppDataSource.getRepository(Photo);

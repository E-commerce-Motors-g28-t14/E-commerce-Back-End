import { date } from "yup";
import Users from "../entities/Users.entities";
import Brands from "../entities/Brands.entities";
import CarModel from "../entities/CarModels.entities";

export interface ICarRequest {
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipePrice: string;
  price: string;
  description: string;
  isActive: boolean;
  userId: string;
  brandId: string;
  modelId: string;
}

export interface ICarResponse {
  id: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  fipePrice: string;
  price: string;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  brandId: string;
  modelId: string;
}

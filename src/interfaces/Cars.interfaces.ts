import { date } from "yup";
import Users from "../entities/Users.entities";
import { IphotosRequest, IphotosResponse } from "./Photos.interfaces";

export interface ICarRequest {
  year: number;
  fuel: string;
  km: number;
  color: string;
  isPromo: boolean;
  price: string;
  description: string;
  isActive: boolean;
  brand: string;
  model: string;
  photos: IphotosRequest[];
}

export interface ICarResponse {
  id: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  isPromo: boolean;
  price: string;
  description: string;
  isActive: boolean;
  brand: string;
  model: string;
  photos: IphotosResponse[];
  createdAt: Date;
  updatedAt: Date;
}

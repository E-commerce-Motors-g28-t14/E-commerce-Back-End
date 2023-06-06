import Cars from "../entities/Cars.entities";
import { ICarResponse } from "./Cars.interfaces";

export interface IphotosRequest {
  imageLink: string;
  isCover: boolean;
}

export interface IphotosResponse {
  id: string;
  imageLink: string;
  isCover: boolean;
  car: ICarResponse;
}

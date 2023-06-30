import { z } from "zod";
import {
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carResponseSerializer,
  carResponseSerializerUser,
  carUpdateSerializer,
  carsInfoResponseSerializer,
} from "../serializers";
import { carWithPhotosAndUserSchema } from "../serializers/cars.serializers";

type ICarRequest = z.infer<typeof carRequestSerializer>;
type ICarWithoutPhotosRequest = z.infer<
  typeof carRequestWithoutPhotosSerializer
>;
type ICarResponse = z.infer<typeof carResponseSerializer>;
type ICarUpdate = z.infer<typeof carUpdateSerializer>;
type ICarInfoResponse = z.infer<typeof carsInfoResponseSerializer>;

interface ICarsQuery {
  brand?: string;
  model?: string;
  color?: string;
  year?: string;
  fuel?: string;
  minPrice?: string;
  maxPrice?: string;
  minKm?: string;
  maxKm?: string;
  page?: string;
  perPage?: string;
}

type ICarsQueryArray =
  | "brand"
  | "model"
  | "color"
  | "year"
  | "fuel"
  | "minPrice"
  | "maxPrice"
  | "minKm"
  | "maxKm"
  | "page"
  | "perPage";

interface ICarsIds {
  ids_Car_id: string;
}

type ICarResponseUser = z.infer<typeof carResponseSerializerUser>;

interface ICarsPagination {
  previousPage: string | null;
  nextPage: string | null;
  count: number;
  data: ICarResponseUser[];
}

type iCarWithPhotoAndUser = z.infer<typeof carWithPhotosAndUserSchema>;
export {
  ICarRequest,
  ICarResponse,
  ICarWithoutPhotosRequest,
  ICarUpdate,
  ICarInfoResponse,
  ICarsQuery,
  ICarsQueryArray,
  ICarsIds,
  ICarsPagination,
  ICarResponseUser,
  iCarWithPhotoAndUser,
};

import { z } from "zod";
import {
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carResponseSerializer,
  carUpdateSerializer,
  carsInfoResponseSerializer,
} from "../serializers";

type ICarRequest = z.infer<typeof carRequestSerializer>;
type ICarWithoutPhotosRequest = z.infer<
  typeof carRequestWithoutPhotosSerializer
>;
type ICarResponse = z.infer<typeof carResponseSerializer>;
type ICarUpdate = z.infer<typeof carUpdateSerializer>;
type ICarInfoResponse = z.infer<typeof carsInfoResponseSerializer>;

export {
  ICarRequest,
  ICarResponse,
  ICarWithoutPhotosRequest,
  ICarUpdate,
  ICarInfoResponse,
};

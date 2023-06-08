import { z } from "zod";
import {
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carResponseSerializer,
} from "../serializers";
import { carUpdateSerializer } from "../serializers/cars.serializers";

type ICarRequest = z.infer<typeof carRequestSerializer>;
type ICarWithoutPhotosRequest = z.infer<
  typeof carRequestWithoutPhotosSerializer
>;
type ICarResponse = z.infer<typeof carResponseSerializer>;
type ICarUpdate = z.infer<typeof carUpdateSerializer>;

export { ICarRequest, ICarResponse, ICarWithoutPhotosRequest, ICarUpdate };

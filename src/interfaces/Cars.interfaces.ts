import { z } from "zod";
import {
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carResponseSerializer,
} from "../serializers";

type ICarRequest = z.infer<typeof carRequestSerializer>;
type ICarWithoutPhotosRequest = z.infer<
  typeof carRequestWithoutPhotosSerializer
>;
type ICarResponse = z.infer<typeof carResponseSerializer>;

export { ICarRequest, ICarResponse, ICarWithoutPhotosRequest };

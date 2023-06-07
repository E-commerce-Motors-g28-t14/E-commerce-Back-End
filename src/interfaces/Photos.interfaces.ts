import { z } from "zod";
import {
  allPhotosRequestSerializer,
  allPhotosResponseSerializer,
  photoRequestSerializer,
  photoResponseSerializer,
} from "../serializers";

type IPhotoRequest = z.infer<typeof photoRequestSerializer>;
type IPhotoResponse = z.infer<typeof photoResponseSerializer>;

type IPhotoArrayRequest = z.infer<typeof allPhotosRequestSerializer>;
type IPhotoArrayResponse = z.infer<typeof allPhotosResponseSerializer>;

export {
  IPhotoRequest,
  IPhotoResponse,
  IPhotoArrayRequest,
  IPhotoArrayResponse,
};

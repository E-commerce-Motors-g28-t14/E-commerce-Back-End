import {
  createAddressReturnSchema,
  createAddressSchema,
} from "./addresses.serializers";
import {
  carResponseSerializer,
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carsInfoResponseSerializer,
  carUpdateSerializer,
  carResponseSerializerUser,
} from "./cars.serializers";
import { CommentsCarReturnSchema } from "./comments.serializers";
import {
  allPhotosResponseSerializer,
  allPhotosRequestSerializer,
  allPhotosRequestWithoutCarIdSerializer,
  photoRequestSerializer,
  photoRequestWithoutCarIdSerializer,
  photoResponseSerializer,
} from "./photos.serializers";
import {
  userAttSchema,
  userCreateReturnSchema,
  userCreateSchema,
  userInfoSchema,
} from "./users.serializers";

export {
  carResponseSerializer,
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  allPhotosResponseSerializer,
  allPhotosRequestSerializer,
  allPhotosRequestWithoutCarIdSerializer,
  photoRequestSerializer,
  photoRequestWithoutCarIdSerializer,
  photoResponseSerializer,
  carsInfoResponseSerializer,
  carUpdateSerializer,
  userCreateSchema,
  userCreateReturnSchema,
  createAddressReturnSchema,
  createAddressSchema,
  userAttSchema,
  userInfoSchema,
  carResponseSerializerUser,
  CommentsCarReturnSchema,
};

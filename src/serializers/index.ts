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
  carResponseArraySerializer,
  carWithPhotosAndUserSchema,
} from "./cars.serializers";
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
  userWithoutAddressReturnSchema,
  userWithAllDataSchema,
  userWithCarsAndPhotosSchema,
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
};

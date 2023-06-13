import { 
  createAddressReturnSchema, 
  createAddressSchema 
} from "./addresses.serializer";
import {
  carResponseSerializer,
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carsInfoResponseSerializer,
  carUpdateSerializer,
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
  userCreateReturnSchema, 
  userCreateSchema 
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
  createAddressSchema
};

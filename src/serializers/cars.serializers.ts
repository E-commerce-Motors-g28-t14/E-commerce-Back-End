import { z } from "zod";
import {
  allPhotosRequestWithoutCarIdSerializer,
  allPhotosResponseSerializer,
} from "./photos.serializers";

const carResponseSerializer = z.object({
  id: z.string(),
  brand: z.string().max(150),
  model: z.string().max(150),
  year: z.number(),
  fuel: z.string().max(150),
  km: z.number(),
  color: z.string().max(150),
  isPromo: z.boolean().default(false),
  price: z.string().max(150),
  description: z.string().max(150).nullish(),
  isActive: z.boolean().default(true),
  createdAt: z.string(),
  updatedAt: z.string(),
  photos: allPhotosResponseSerializer,
});

const carRequestSerializer = carResponseSerializer
  .omit({
    id: true,
    isPromo: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
    photos: true,
  })
  .extend({
    fipePrice: z.string(),
    newPhotos: allPhotosRequestWithoutCarIdSerializer,
  });

const carRequestWithoutPhotosSerializer = carResponseSerializer.omit({
  photos: true,
});

export {
  carResponseSerializer,
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
};

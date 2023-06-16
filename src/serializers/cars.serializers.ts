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
  fuel: z.number(),
  km: z.number(),
  color: z.string().max(150),
  isPromo: z.boolean().default(false),
  price: z.string().max(150),
  description: z.string().max(150).nullish(),
  isActive: z.boolean().default(true),
  createdAt: z.date(),
  updatedAt: z.date(),
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
    photos: allPhotosRequestWithoutCarIdSerializer,
  });

const carRequestWithoutPhotosSerializer = carResponseSerializer.omit({
  photos: true,
});

const carUpdateSerializer = carRequestSerializer.extend({
  isActive: z.boolean(),
});

const carsInfoResponseSerializer = z.object({
  brands: z.string().array(),
  models: z.string().array(),
  years: z.number().array(),
  fuels: z.string().array(),
  colors: z.string().array(),
});

export {
  carResponseSerializer,
  carRequestSerializer,
  carRequestWithoutPhotosSerializer,
  carUpdateSerializer,
  carsInfoResponseSerializer,
};

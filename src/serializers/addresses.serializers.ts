import { z } from "zod";

const createAddressSchema = z.object({
  district: z.string().max(150),
  zipCode: z.string().max(150),
  number: z.string().max(150),
  city: z.string().max(150),
  state: z.string().max(3),
  complement: z.string().max(150),
});

const createAddressReturnSchema = createAddressSchema.extend({
  id: z.string(),
});

export { createAddressReturnSchema, createAddressSchema };

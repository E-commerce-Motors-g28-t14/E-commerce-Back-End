import { date, z } from "zod";
import { createAddressReturnSchema } from "./addresses.serializers";

const userCreateSchema = z.object({
  name: z.string().max(150),
  password: z.string().max(150),
  email: z.string().max(150),
  cpf: z.string().max(150),
  color: z.number().nonnegative().max(12),
  birthdate: z.string().or(z.date()),
  phone: z.string().max(11),
  description: z.string().max(150).nullish(),
  isSeller: z.boolean().nullish().default(false),
  district: z.string().max(150),
  zipCode: z.string().max(150),
  number: z.string().max(150),
  city: z.string().max(150),
  state: z.string().max(3),
  complement: z.string().max(150),
});

const userCreateReturnSchema = userCreateSchema
  .extend({
    id: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    address: createAddressReturnSchema,
  })
  .omit({
    password: true,
    district: true,
    zipCode: true,
    number: true,
    city: true,
    state: true,
    complement: true,
  });

const userAttSchema = userCreateSchema.omit({
  password: true,
  color: true,
  isSeller: true,
  district: true,
  zipCode: true,
  number: true,
  city: true,
  state: true,
  complement: true,
});

export { userCreateSchema, userCreateReturnSchema, userAttSchema };

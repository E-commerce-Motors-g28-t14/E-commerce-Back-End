import { z } from "zod";
import { createAddressSchema } from "../serializers";

export type iAttAdress = z.infer<typeof createAddressSchema>;

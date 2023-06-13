import { z } from "zod"

const loginUserSchema = z.object({
    email: z.string().max(150),
    password: z.string().max(150),
})

export { loginUserSchema }
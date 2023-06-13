import { z } from "zod";
import { loginUserSchema } from "../serializers/login.serializers";
import { iUserCreateReturn } from "./User.interfaces";

type iLoginUser = z.infer<typeof loginUserSchema>

interface iLoginUserReturn{
    token: string,
    user: iUserCreateReturn
}

export { iLoginUser, iLoginUserReturn }
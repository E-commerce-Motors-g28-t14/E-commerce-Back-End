import "dotenv/config"
import { iLoginUser, iLoginUserReturn } from "../../interfaces";
import { Repository } from "typeorm"
import { AppError } from "../../errors"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import AppDataSource from "../../data-source";
import { User } from "../../entities";
import { userCreateReturnSchema } from "../../serializers";

export const loginUserService = async (data: iLoginUser): Promise<iLoginUserReturn> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)

    const user: User | null = await userRepo.findOne({
        where: {
            email: data.email
        },
        relations: {
            address: true
        }
    })

    if(!user){
        throw new AppError("Invalid credentials", 401)
    }

    const comparePassword: boolean = await compare(data.password, user.password)

    if(!comparePassword){
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = sign(
        {
            isSeller: user.isSeller
        },
        String(process.env.SECRET_KEY),
        {
            expiresIn: '24h',
            subject: String(user.id)
        }
    )

    return {
        token,
        user: userCreateReturnSchema.parse(user)
    }
}
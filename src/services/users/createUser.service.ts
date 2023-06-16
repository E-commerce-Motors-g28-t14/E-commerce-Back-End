import { Repository } from "typeorm";
import { iUserCreate, iUserCreateReturn } from "../../interfaces/User.interfaces";
import { Address, User } from "../../entities";
import AppDataSource from "../../data-source";
import { userCreateReturnSchema } from "../../serializers";

export const createUserService = async (data: iUserCreate): Promise<iUserCreateReturn> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User)
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address)

    const userData = {
        birthdate: data.birthdate,
        name: data.name,
        email: data.email,
        cpf: data.cpf,
        description: !data.description ? null : data.description,
        isSeller: data.isSeller,
        password: data.password,
        phone: data.phone,
        color: data.color
    }

    const user: User = userRepo.create(userData)

    await userRepo.save(user)

    const addressData = {
        city: data.city,
        state: data.state,
        complement: data.complement,
        zipCode: data.zipCode,
        district: data.district,
        number: data.number
    }

    const address: Address = addressRepo.create({...addressData, user})

    await addressRepo.save(address)

    return userCreateReturnSchema.parse({
        ...user,
        address
    })
}
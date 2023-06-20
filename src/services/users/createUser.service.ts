import { Repository } from "typeorm";
import {
  iUserCreate,
  iUserCreateReturn,
} from "../../interfaces/User.interfaces";
import { Adress, User } from "../../entities";
import AppDataSource from "../../data-source";
import { userCreateReturnSchema } from "../../serializers";

export const createUserService = async (
  data: iUserCreate
): Promise<iUserCreateReturn> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const addressRepo: Repository<Adress> = AppDataSource.getRepository(Adress);

  const userData = {
    birthdate: data.birthdate,
    name: data.name,
    email: data.email,
    cpf: data.cpf,
    description: !data.description ? null : data.description,
    isSeller: data.isSeller,
    password: data.password,
    phone: data.phone,
  };

  const user: User = userRepo.create(userData);

  await userRepo.save(user);

  const addressData = {
    city: data.city,
    state: data.state,
    complement: data.complement,
    zipCode: data.zipCode,
    district: data.district,
    number: data.number,
  };

  const address: Adress = addressRepo.create({ ...addressData, user });

  await addressRepo.save(address);

  return userCreateReturnSchema.parse({
    ...user,
    address,
  });
};

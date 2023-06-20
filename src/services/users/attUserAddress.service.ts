import { iAttAdress } from "../../interfaces";
import { iUserAtt, iUserCreateReturn } from "../../interfaces/User.interfaces";
import { addressRepository, userRepository } from "../../repositories/index";
import { userCreateReturnSchema } from "../../serializers";

export const attUserAddressService = async (
  data: iAttAdress,
  userId: string
) => {
  const user = await userRepository.findOne({
    where: { id: userId },
    relations: { address: true },
  });

  const addressOldData = await addressRepository.findOne({
    where: {
      id: user.address.id,
    },
  });

  const addressNewData = addressRepository.create({
    ...addressOldData,
    ...data,
  });

  await addressRepository.save(addressNewData);

  return addressNewData;
};

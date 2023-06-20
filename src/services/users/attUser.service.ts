import { iUserAtt, iUserCreateReturn } from "../../interfaces/User.interfaces";
import { userRepository } from "../../repositories/index";
import { userCreateReturnSchema } from "../../serializers";

export const attUserService = async (data: iUserAtt, userId: string) => {
  const userOldData = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: { address: true },
  });

  const userNewData = userRepository.create({ ...userOldData, ...data });

  await userRepository.save(userNewData);

  const userReturn: iUserCreateReturn =
    userCreateReturnSchema.parse(userNewData);

  return userReturn;
};

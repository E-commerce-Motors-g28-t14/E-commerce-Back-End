import { userRepository } from "../../repositories";

export const deleteUserService = async (userId: string) => {
  const user = await userRepository.findOne({
    where: {
      id: userId,
    },
  });

  await userRepository.delete(user.id);

  return;
};

import { Repository } from "typeorm"
import { User } from "../../entities"
import AppDataSource from "../../data-source"
import { userRepository } from "../../repositories"

export const getUserByIdService = async (id: string): Promise<User | null> => {      
  
    const user = await userRepository.findOne({
        where:{id:id}
      })     
    

    return user || null;
   
}
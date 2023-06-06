import AppDataSource from "../data-source";
import { ICarRequest, ICarResponse } from "../interfaces/Cars.interfaces";
import Cars from "../entities/Cars.entities";
import Users from "../entities/Users.entities";
import Brands from "../entities/Brands.entities";
import CarModel from "../entities/CarModels.entities";

export const CreateCarService = async (
  req: ICarRequest,
  id: string
): Promise<ICarResponse> => {
  const dataSource = AppDataSource.getRepository(Cars);
  const getuser = AppDataSource.getRepository(Users);
  const getBrand = AppDataSource.getRepository(Brands);
  const getModel = AppDataSource.getRepository(CarModel);

  const user = await getuser.findOneByOrFail({
    id: id,
  });

  const brand = await getBrand.findOneByOrFail({
    id: req.brandId,
  });

  const model = await getModel.findOneByOrFail({
    id: req.modelId,
  });

  const car = new Cars();
  car.year = req.year;
  car.description = req.description;
  car.price = req.price;
  car.km = req.km;
  car.fuel = req.fuel;
  car.color = req.color;
  car.fipePrice = req.fipePrice;
  car.isActive = req.isActive;
  car.user = user;

  const dataCar: any = await dataSource.save(car);
  return dataCar;
};

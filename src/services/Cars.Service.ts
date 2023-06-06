import AppDataSource from "../data-source";
import { ICarRequest, ICarResponse } from "../interfaces/Cars.interfaces";
import Cars from "../entities/Cars.entities";
import Users from "../entities/Users.entities";
import Photos from "../entities/Photos.entities";
import {
  IphotosRequest,
  IphotosResponse,
} from "../interfaces/Photos.interfaces";

export const CreateCarService = async (
  req: ICarRequest
): Promise<ICarResponse> => {
  const dataSource = AppDataSource.getRepository(Cars);
  const getTablePhoto = AppDataSource.getRepository(Photos);
  const car = new Cars();

  car.year = req.year;
  car.description = req.description;
  car.price = req.price;
  car.km = req.km;
  car.fuel = req.fuel;
  car.color = req.color;
  car.isPromo = req.isPromo;
  car.isActive = req.isActive;
  car.brand = req.brand;
  car.model = req.model;

  const dataCar: ICarResponse = await dataSource.save(car);

  if (dataCar) {
    const data = req.photos.map(
      async (photo: IphotosRequest): Promise<IphotosResponse> => {
        const newphoto = new Photos();
        newphoto.imageLink = photo.imageLink;
        newphoto.isCover = photo.isCover;
        console.log(newphoto);
        await getTablePhoto.save(newphoto);
        return newphoto;
      }
    );
    car.photos = <[]>await Promise.all(
      data.map(async (photo) => {
        return photo;
      })
    );
  }

  return dataCar;
};

export const GetCarsService = async (): Promise<ICarResponse[]> => {
  const dataSource = AppDataSource.getRepository(Cars);

  const cars = await dataSource.find({ relations: ["photos"] });
  const listCar = <ICarResponse[]>await Promise.all(
    cars.map(async (car) => {
      return car;
    })
  );
  return listCar;
};

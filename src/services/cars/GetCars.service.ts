import AppDataSource from "../../data-source";
import { Car } from "../../entities";
import { ICarResponse, ICarsIds, ICarsPagination, ICarsQuery, ICarsQueryArray } from "../../interfaces";
import { carRepository } from "../../repositories";
import { photoResponseSerializer } from "../../serializers";

export const GetCarsService = async (queries: ICarsQuery): Promise<ICarsPagination> => {
  let page: number = Number(queries.page) || 1
  let perPage: number = Number(queries.perPage) || 12

  if(page < 1){
    page = 1
  }

  if(perPage > 12 || perPage < 1){
    perPage = 12
  }

  let queryValues: string[] = Object.values(queries) 

  const queryKeys: string[] = Object.keys(queries).filter((key: string, index: number) => {
    if(key === "page" || key === "perPage"){
      queryValues[index] = null
      return null
    }
    return key
  })

  queryValues = queryValues.filter((key) => {
    if(key !== null) return key
  })

  const port: number = Number(process.env.PORT) || 3002

  if(queryKeys.length){
    let select: string = `SELECT * FROM cars WHERE`

    let filter: string = ""

    queryKeys.forEach((element: ICarsQueryArray, index: number) => {
      const indexValue = index + 1
      if(element === "maxKm"){
        if(indexValue !== 1){
          return filter += ` AND km <= $${indexValue}`
        } else{
          return filter += ` km <= $${indexValue}`
        }
      }
      if(element === "minKm"){
        if(indexValue !== 1){
          return filter += ` AND km >= $${indexValue}`
        } else{
          return filter += ` km >= $${indexValue}`
        }
      }
      if(element === "maxPrice"){
        if(indexValue !== 1){
          return filter += ` AND price <= $${indexValue}`
        } else{
          return filter += ` price <= $${indexValue}`
        }
      }
      if(element === "minPrice"){
        if(indexValue !== 1){
          return filter += ` AND price >= $${indexValue}`
        } else{
          return filter += ` price >= $${indexValue}`
        }
      }
      if(indexValue !== 1){
        return filter += ` AND ${element} = $${indexValue}`
      } else{
        return filter += ` ${element} = $${indexValue}`
      }
    });

    const actualPage: string = `LIMIT ${perPage} OFFSET ${perPage * (page - 1)}`

    const nextPage: string = ` LIMIT ${perPage} OFFSET ${perPage * page}`

    const carsId: ICarsIds[] = await AppDataSource.manager.query(`SELECT DISTINCT "distinctAlias"."id" AS "ids_Car_id" FROM (SELECT "cars"."id", "cars"."brand", "cars"."model", "cars"."year", "cars"."fuel", "cars"."km", "cars"."color", "cars"."isPromo", "cars"."price", "cars"."description", "cars"."isActive", "cars"."createdAt", "cars"."updatedAt", "Car__Car_photos"."id" AS "Car__Car_photos_id", "Car__Car_photos"."imageLink" AS "Car__Car_photos_imageLink", "Car__Car_photos"."isCover" AS "Car__Car_photos_isCover", "Car__Car_photos"."carId" AS "Car__Car_photos_carId" FROM "cars" LEFT JOIN "photos" "Car__Car_photos" ON "Car__Car_photos"."carId"="cars"."id") "distinctAlias" WHERE${filter} ${actualPage}`, queryValues)

    let carsPhotos: any[] = []

    let cars: Car[] = []

    if(carsId.length){
      carsPhotos = await AppDataSource.manager.query(`SELECT * FROM "photos" WHERE "photos"."carId" IN (${carsId.map((key, index) => `$${index + 1}`)})`, carsId.map((key) => key.ids_Car_id))

      cars = await AppDataSource.manager.query(`SELECT "cars"."id", "cars"."brand", "cars"."model", "cars"."year", "cars"."fuel", "cars"."km", "cars"."color", "cars"."isPromo", "cars"."price", "cars"."description", "cars"."isActive", "cars"."createdAt", "cars"."updatedAt" FROM "cars" WHERE "cars"."id" IN (${carsId.map((key, index) => `$${index + 1}`)})`, carsId.map((key) => key.ids_Car_id))

      carsPhotos.forEach((photo) => {
        cars.forEach((car) => {
          if(photo.carId === car.id){
            photo = photoResponseSerializer.parse(photo)
            if(!car.photos){
              car.photos = [photo]
            } else {
              car.photos.push(photo)
            }
          }
        })  
      })
    }

    const queryNextPage: Car[] = await AppDataSource.manager.query(select + filter + nextPage, queryValues)

    const queryAllCars: Car[] = await AppDataSource.manager.query(select + filter, queryValues)

    return {
      previousPage: page - 1 < 1 ? null : `http://localhost:${port}/cars?page=${page - 1}&perPage=${perPage}`,
      nextPage: !queryNextPage.length ? null : `http://localhost:${port}/cars?page=${page + 1}&perPage=${perPage}`,
      count: queryAllCars.length,
      data: cars
    }
  }

  const cars: ICarResponse[] = await carRepository.find({ 
    relations: { 
      photos: true 
    },
    skip: perPage * (page - 1),
    take: perPage
  });

  const carsNextPage: ICarResponse[] = await carRepository.find({
    skip: perPage * page,
    take: perPage
  })

  const allCarsQuantity: ICarResponse[] = await carRepository.find();

  return {
    previousPage: page - 1 < 1 ? null : `http://localhost:${port}/cars?page=${page - 1}&perPage=${perPage}`,
    nextPage: !carsNextPage.length ? null : `http://localhost:${port}/cars?page=${page + 1}&perPage=${perPage}`,
    count: allCarsQuantity.length,
    data: cars
  }
};

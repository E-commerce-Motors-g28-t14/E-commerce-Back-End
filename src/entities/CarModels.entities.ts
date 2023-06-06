import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Cars from "./Cars.entities";

@Entity("CarModel")
export class CarModel {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  model: string;

  @OneToMany(() => Cars, (car) => car.model)
  cars: Cars[];
}

export default CarModel;

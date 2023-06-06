import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import Cars from "./Cars.entities";

@Entity("Brands")
export class Brands {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Cars, (car) => car.brand)
  cars: Cars[];
}

export default Brands;

import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Cars from "./Cars.entities";

@Entity("Photos")
export class Photos {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  imageLink: string;

  @Column({ default: true })
  isCover: boolean;

  @ManyToOne(() => Cars, (car) => car.id)
  carId: Cars;
}

export default Photos;

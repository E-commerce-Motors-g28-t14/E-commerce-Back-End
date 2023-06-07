import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Car from "./Cars.entities";

@Entity("photos")
class Photo {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  imageLink: string;

  @Column({ default: false })
  isCover: boolean;

  @ManyToOne(() => Car, (Car) => Car.photos)
  car: Car;
}

export default Photo;

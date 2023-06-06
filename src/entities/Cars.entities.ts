import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  BeforeInsert,
  ManyToOne,
} from "typeorm";
import bcrypt from "bcryptjs";
import Users from "./Users.entities";
import Brands from "./Brands.entities";
import CarModel from "./CarModels.entities";
import Photos from "./Photos.entities";
import Comments from "./Comments.entities";

@Entity("Cars")
export class Cars {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  year: number;

  @Column({ length: 150 })
  fuel: string;

  @Column()
  km: number;

  @Column({ length: 150 })
  color: string;

  @Column({ length: 150 })
  fipePrice: string;

  @Column({ length: 150 })
  price: string;

  @Column({ length: 150, nullable: true })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Users, (user) => user.cars)
  user: Users;

  @ManyToOne(() => Brands, (brand) => brand.cars)
  brand: Brands;

  @ManyToOne(() => CarModel, (model) => model.cars)
  model: CarModel;

  @OneToMany(() => Photos, (photo) => photo)
  photos: Photos[];

  @OneToMany(() => Comments, (comment) => comment.Car)
  comments: Comments[];
}

export default Cars;

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Users from "./Users.entities";
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

  @Column({ default: false })
  isPromo: boolean;

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

  @Column({ length: 150, nullable: false })
  brand: string;

  @Column({ length: 150, nullable: false })
  model: string;

  @OneToMany(() => Photos, (photo) => photo.car)
  photos: Photos[];

  @OneToMany(() => Comments, (comment) => comment.Car)
  comments: Comments[];
}

export default Cars;

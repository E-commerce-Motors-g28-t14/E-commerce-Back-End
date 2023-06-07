import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./Users.entities";
import Photo from "./Photos.entities";
import Comment from "./Comments.entities";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  brand: string;

  @Column({ length: 150 })
  model: string;

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
  description?: string | null | undefined;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: "date" })
  createdAt: string;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string;

  @ManyToOne(() => User, (User) => User.cars)
  user: User;

  @OneToMany(() => Photo, (Photo) => Photo.car)
  photos: Photo[];

  @OneToMany(() => Comment, (Comment) => Comment.car)
  comments: Comment[];
}

export default Car;

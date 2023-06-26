import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";

import Car from "./Cars.entities";
import User from "./Users.entities";

@Entity("comments")
class Comment {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Car, (Car) => Car.comments)
  car: Car;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
}

export default Comment;

import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";

import Cars from "./Cars.entities";

@Entity("Comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 250 })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => Cars, (car) => car.comments)
  Car: Cars;
}

export default Comments;

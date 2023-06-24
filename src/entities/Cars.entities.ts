import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import User from "./Users.entities";
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

  @Column()
  fuel: number;

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

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (User) => User.cars, { onDelete: "CASCADE" })
  user: User;

  @OneToMany(() => Photo, (Photo) => Photo.car, { cascade: true })
  photos: Photo[];

  @OneToMany(() => Comment, (Comment) => Comment.car)
  comments: Comment[];
}

export default Car;

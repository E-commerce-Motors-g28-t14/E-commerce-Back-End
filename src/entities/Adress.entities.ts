import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import Users from "./Users.entities";

@Entity("Adress")
export class Adress {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  district: string;

  @Column({ length: 150 })
  zipCode: string;

  @Column({ length: 150 })
  number: string;

  @Column({ length: 150 })
  city: string;

  @Column({ length: 3 })
  state: string;

  @Column({ length: 150 })
  complement: string;

  @OneToOne(() => Users)
  @JoinColumn()
  user: Users;
}

export default Adress;

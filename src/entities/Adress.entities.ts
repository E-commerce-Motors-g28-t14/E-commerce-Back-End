import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
import Users from "./Users.entities";

@Entity("address")
export class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  district: string;

  @Column({ length: 150 })
  zipCode: string;

  @Column()
  street: string;

  @Column({ length: 150 })
  number: string;

  @Column({ length: 150 })
  city: string;

  @Column({ length: 3 })
  state: string;

  @Column({ length: 150 })
  complement: string;

  @OneToOne(() => Users, { onDelete: "CASCADE" })
  @JoinColumn()
  user: Users;
}

export default Address;

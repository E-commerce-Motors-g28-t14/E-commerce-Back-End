import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { User } from "./Users.entities";

@Entity("addresses")
class Address {
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

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}

export default Address;

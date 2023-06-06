import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import Adress from "./Adress.entities";
import Cars from "./Cars.entities";

@Entity("Users")
export class Users {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 150 })
  name: string;

  @Column({ length: 150 })
  password: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ length: 150, unique: true })
  cpf: string;

  @CreateDateColumn()
  birthdate: Date;

  @Column({ length: 11 })
  phone: string;

  @Column({ length: 150, nullable: true })
  description: string;

  @OneToOne(() => Adress, (adress) => adress.user)
  adress: Adress;

  @OneToMany(() => Cars, (car) => car.user)
  cars: Cars[];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;
}

export default Users;

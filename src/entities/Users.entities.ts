import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
  BeforeUpdate,
  BeforeInsert,
} from "typeorm";
import { Adress } from "./Adress.entities";
import { Car } from "./Cars.entities";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
export class User {
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

  @Column({ default: true })
  isSeller: boolean;

  @OneToOne(() => Adress, (adress) => adress.user)
  adress: Adress;

  @OneToMany(() => Car, (car) => car.user)
  cars: Car[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword(): void {
    const rounds: number = getRounds(this.password);

    if (!rounds) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export default User;

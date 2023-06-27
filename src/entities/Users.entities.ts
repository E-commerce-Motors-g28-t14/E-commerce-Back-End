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
import Address from "./Adress.entities";
import Car from "./Cars.entities";
import { getRounds, hashSync } from "bcryptjs";
import Comment from "./Comments.entities";
import { v4 as uuid } from "uuid";

@Entity("users")
class User {
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

  @Column()
  color: number;

  @OneToOne(() => Address, (address) => address.user, { cascade: true })
  address: Address;

  @OneToMany(() => Car, (car) => car.user, { cascade: true })
  cars: Car[];

  @OneToMany(() => Comment, (comment) => comment.user, { cascade: true })
  comments: Comment[];

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

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default User;

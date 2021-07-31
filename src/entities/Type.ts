import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Test from "./Test";

@Entity("types")
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=> Test, test => test.type)
  tests: Test[]
}
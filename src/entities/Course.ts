import { Entity, PrimaryGeneratedColumn, Column, ManyToMany,OneToMany, JoinTable } from "typeorm";
import Teacher from "./Teacher";
import Test from "./Test";
import Major from "./Major"


@Entity("courses")
export default class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  period: number;

  @ManyToMany(()=>Teacher, teacher => teacher.courses)
  @JoinTable()
  teachers: Teacher[]

  @ManyToMany(()=>Major, major => major.courses)
  majors: Major[]

  @OneToMany(()=> Test, test => test.course)
  tests: Test[]
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Type from "./Type";
import Course from "./Course";
import Teacher from "./Teacher";

@Entity("tests")
export default class Test {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  link: string;

  @ManyToOne(()=>Type, type => type.tests)
  type: Type;

  @ManyToOne(()=>Course, course => course.tests)
  course: Course;

  @ManyToOne(()=>Teacher, teacher => teacher.tests)
  teacher: Teacher;
}
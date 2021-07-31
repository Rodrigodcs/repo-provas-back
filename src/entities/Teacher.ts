import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import Test from "./Test";
import Course from "./Course"
import Major from "./Major"

@Entity("teachers")
export default class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(()=> Test, test => test.teacher)
  tests: Test[]

  @ManyToMany(()=>Course, course => course.teachers)
  courses: Course[]

  @ManyToMany(()=>Major, major => major.teachers)
  majors: Major[]
}
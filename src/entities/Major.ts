import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import Course from "./Course";
import Teacher from "./Teacher";

@Entity("majors")
export default class Major {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @ManyToMany(()=>Course, course => course.majors)
  @JoinTable()
  courses:Course[]

  @ManyToMany(()=> Teacher, teacher => teacher.majors)
  @JoinTable()
  teachers: Teacher[]
}
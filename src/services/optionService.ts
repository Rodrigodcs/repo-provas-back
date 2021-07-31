import { getRepository } from "typeorm";

import Teacher from "../entities/Teacher"
import Major from "../entities/Major";
import Course from "../entities/Course";

export async function getMajors() {
  const majors = await getRepository(Major).find();
  return majors;
}

export async function getMajorGivenId (majorId:number) {
  const majors = await getRepository(Major).find({
    relations: ['teachers','courses'],
    where: { id: majorId }
  });
  return majors[0];
}

export async function getCourses() {
  const courses = await getRepository(Course).find();
  return courses;
}

export async function getCoursesGivenId(courseId:number) {
  const courses = await getRepository(Course).find({
    relations: ['teachers'],
    where: { id: courseId }
  });
  return courses[0];
}

export async function getTeachers() {
  const teachers = await getRepository(Teacher).find();
  return teachers;
}

export async function getTeacherGivenId(teacherId:number) {
  const teachers = await getRepository(Teacher).find({
    relations: ['courses'],
    where: { id: teacherId }
  });
  return teachers;
}


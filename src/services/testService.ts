import { getRepository } from "typeorm";

import Test from "../entities/Test";
import Type from "../entities/Type";
import Teacher from "../entities/Teacher";
import Course from "../entities/Course";

export async function getTests() {
  const tests = await getRepository(Test).find({
    relations: ['type','course','teacher']
  });
  return tests;
}

export async function getTypes() {
  const tests = await getRepository(Type).find();
  return tests;
  }

export async function addNewTest(
  testName:string,
  pdfLink:string,
  testType:number,
  courseId:number,
  teacherId:number
){
  const type:Type = await getRepository(Type).findOne({id: testType})
  const course:Course = await getRepository(Course).findOne({id: courseId})
  const teacher:Teacher = await getRepository(Teacher).findOne({id: teacherId})

  await getRepository(Test).insert({name:testName, link: pdfLink, type, course, teacher})
}
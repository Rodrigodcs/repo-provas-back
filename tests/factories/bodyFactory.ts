import faker from "faker"

import { createType } from "../factories/testsFactory";
import { createTeacher, createCourse } from "../factories/oprionsFactory"

export async function createTestBody ( testName:string) {
    const type = await createType();
    const teacher = await createTeacher();
    const course = await createCourse();

    const testBody ={
        testName,
        pdfLink:faker.internet.url(),
        testType:type.id,
        courseId:course.id,
        teacherId:teacher.id
    }
  
    return testBody;
  }
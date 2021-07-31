import { getRepository } from "typeorm";

import Major from "../../src/entities/Major";
import Teacher from "../../src/entities/Teacher";
import Course from "../../src/entities/Course";
import Test from "../../src/entities/Test";
import Type from "../../src/entities/Type";

export async function clearDatabase () {
  await getRepository(Major).delete({});
  await getRepository(Test).delete({});
  await getRepository(Teacher).delete({});
  await getRepository(Course).delete({});
}
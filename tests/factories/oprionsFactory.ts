import { getRepository } from "typeorm";
import faker from "faker"

import Major from "../../src/entities/Major";
import Course from "../../src/entities/Course";

export async function createMajor () {
  const major = await getRepository(Major).create({
    name:faker.name.title()
  });

  await getRepository(Major).save(major);

  return major;
}

export async function createCourse () {
  const course = await getRepository(Course).create({
    name:faker.name.title(),
    period: Math.floor(Math.random()*10+1)
  });

  await getRepository(Course).save(course);

  return course;
}
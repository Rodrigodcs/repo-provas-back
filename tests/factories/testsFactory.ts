import { getRepository } from "typeorm";
import faker from "faker"

import Test from "../../src/entities/Test";
import Type from "../../src/entities/Type";

export async function createTest () {
  const test = await getRepository(Test).create({
    name:faker.name.title(),
    link:faker.internet.url()
  });

  await getRepository(Test).save(test);

  return test;
}

export async function createType () {
    const type = await getRepository(Type).create({
      name:faker.name.title()
    });
  
    await getRepository(Type).save(type);
  
    return type;
}
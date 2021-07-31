import { getRepository } from "typeorm";

import Major from "../../src/entities/Major";

export async function createMajor () {
  const major = await getRepository(Major).create({
    name:"Gastronomia"
  });

  await getRepository(Major).save(major);

  return major;
}
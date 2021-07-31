import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createMajor, createCourse} from "../factories/oprionsFactory";
import { clearDatabase } from "../utils/database";

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /options/majors", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const major = await createMajor();

    const response = await supertest(app).get("/options/majors");

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: major.name,
          id: major.id
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});

describe("/options/majors/:id", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const major = await createMajor();

    const response = await supertest(app).get(`/options/majors/${major.id}`);

    expect(response.body).toEqual(
      expect.objectContaining({
        name: major.name,
        id: major.id
      })
    );

    expect(response.status).toBe(200);
  });
});

describe("/options/courses/:id", () => {
  it("should answer with text \"OK!\" and status 200", async () => {
    const course = await createCourse();

    const response = await supertest(app).get(`/options/courses/${course.id}`);

    console.log(course)
    expect(response.body).toEqual(
      expect.objectContaining({
        name: course.name,
        id: course.id,
        period:course.period
      })
    );

    expect(response.status).toBe(200);
  });
});
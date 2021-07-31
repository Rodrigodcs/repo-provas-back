import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createMajor } from "../factories/oprionsFactory";
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
    console.log("aquiiiiiii")
    const major = await createMajor();

    const response = await supertest(app).get("/options/majors");
    console.log("major",major)
    console.log("response",response.body)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          //email: user.email
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});
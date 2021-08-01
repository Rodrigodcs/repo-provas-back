import supertest from "supertest";
import { getConnection } from "typeorm";

import app, { init } from "../../src/app";
import { createTest, createType } from "../factories/testsFactory";
import { clearDatabase } from "../utils/database";
import {createTestBody} from "../factories/bodyFactory"

beforeAll(async () => {
  await init();
});

beforeEach(async () => {
  await clearDatabase();
});

afterAll(async () => {
  await clearDatabase()
  await getConnection().close();
});

describe("GET /tests", () => {
  it("should answer with status 200", async () => {
    const test = await createTest();

    const response = await supertest(app).get("/tests");

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: test.name,
          link: test.link
        })
      ])
    );

    expect(response.status).toBe(200);
  });
});

describe("GET /tests/types", () => {
    it("should answer with status 200", async () => {
      const type = await createType();
  
      const response = await supertest(app).get("/tests/types");
  
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            name: type.name,
          })
        ])
      );
      expect(response.status).toBe(200);
    });
});

describe("POST /test", () => {
    it("should answer with status 201", async () => {

      const body = await createTestBody("2020.1")

      const response = await supertest(app).post("/test").send(body);
  
      expect(response.status).toBe(201);
    });
    it("should answer with status 400 when test name is in wrong format", async () => {

        const body = await createTestBody("0001.3")
        
        const response = await supertest(app).post("/test").send(body);
    
        expect(response.status).toBe(400);
    });
});
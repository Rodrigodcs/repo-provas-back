import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as optionController from "./controllers/optionController";
import * as testController from "./controllers/testController";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/options/majors", optionController.getMajors)
app.get("/options/majors/:id", optionController.getMajor)
app.get("/options/courses/:id",optionController.getCourse)
app.get("/tests", testController.getTests)
app.get("/tests/teacher/:id", testController.getTestsByTeacher)
app.get("/tests/course/:id",testController.getTestsByCourse)
app.get("/tests/types",testController.getTypes)
app.post("/test",testController.postTest)

export async function init () { 
  await connectDatabase();
}

export default app;

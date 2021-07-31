import { Request, Response } from "express";

import * as optionService from "../services/optionService";

export async function getMajors (req: Request, res: Response) {
  try {
    const majors = await optionService.getMajors();
    res.send(majors);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
export async function getMajor (req: Request, res: Response) {
  try {
    const majorId = Number(req.params.id)
    const majors = await optionService.getMajorGivenId(majorId);
    res.send(majors);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getTeachersFromMajor (req: Request, res: Response) {
  try {
    const majorId = Number(req.params.major)
    const major = await optionService.getMajorGivenId(majorId);
    res.send(major.teachers);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getCoursesFromMajor (req: Request, res: Response) {
  try {
    const majorId = Number(req.params.major)
    const major = await optionService.getMajorGivenId(majorId);
    res.send(major.courses);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export async function getCourse (req: Request, res: Response) {
  try {
    const courseId = Number(req.params.id)
    const course = await optionService.getCoursesGivenId(courseId);
    res.send(course);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
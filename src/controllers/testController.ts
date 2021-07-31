import { Request, Response } from "express";
import joi from "joi"

import * as testService from "../services/testService";

export async function getTests (req: Request, res: Response) {
    try {
        const tests = await testService.getTests();
        res.send(tests);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getTestsByTeacher (req: Request, res: Response) {
    try {
        const teacherId = Number(req.params.id)
        const tests = await testService.getTests();
        const teacherTests = tests.filter(t=> {return t.teacher.id===teacherId})
        res.send(teacherTests)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getTestsByCourse (req: Request, res: Response) {
    try {
        const courseId = Number(req.params.id)
        const tests = await testService.getTests();
        const courseTests = tests.filter(t=> {return t.course.id===courseId})
        res.send(courseTests)
        // courseTests.length===0?
        //     res.sendStatus(404):
        //     res.send(courseTests)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function getTypes (req: Request, res: Response) {
    try {
        const types = await testService.getTypes();
        res.send(types);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export async function postTest (req: Request, res: Response){
    try {
        // const validation = testSchema.validate(req.body)
        // if(validation.error){
        //     return res.sendStatus(400)
        // }
        const {testName,pdfLink,testType,courseId,teacherId}= req.body
        await testService.addNewTest(testName,pdfLink,testType,courseId,teacherId);
        return res.sendStatus(201)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
}

export const testSchema = joi.object({
    testName: joi.string().required(),
    testLink: joi.string().uri().required(),
    testType: joi.number().required(),
    courseId: joi.number().required(),
    teacherId: joi.number().required()
})

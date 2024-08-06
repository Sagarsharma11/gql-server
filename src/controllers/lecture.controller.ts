import { Lecture } from "../models/lecture.model.js";

// export const getAllLecture = async () => {};
export const getLectureById = async () => {};
export const addLecture = async (_:any, args:any) => {
    console.log("hello world");
    console.log(args)
    await Lecture.create(args.input)
    return  { statusCode: 200, message: "Data save successfully", success: true };
};
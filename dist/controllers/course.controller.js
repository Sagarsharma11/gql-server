import { Course } from "../models/Course.model.js";
import { Lecture } from "../models/lecture.model.js";
export const getAllCourses = async () => {
    const courseData = await Course.find({});
    console.log(courseData);
    return courseData;
};
export const getAllLectures = async () => {
    const courseData = await Lecture.find({});
    console.log(courseData);
    return courseData;
};
export const getCourseById = async (parent, arg) => {
    const id = arg.id;
    const course = await Course.findById({ _id: id });
    return course;
};
export const getLectureById = async (parent, arg) => {
    const id = arg.id;
    const course = await Lecture.findById({ _id: id });
    return course;
};
export const addCourses = async (parent, args, context, info) => {
    //printing the value in console
    //   console.log("Args => ", args.input)
    Course.create(args.input);
    // DB Logic
    return { statusCode: 200, message: "Data save successfully", success: true };
};

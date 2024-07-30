import { Course } from "../models/Course.model.js";
export const getAllCourses = async () => {
    const courseData = await Course.find({});
    console.log(courseData);
    return courseData;
};
export const getCourseById = async (parent, arg) => {
    const id = arg.id;
    return id;
};

import { Course } from "../models/Course.model.js";

export const getAllCourses = async () => {
  const courseData = await Course.find({});
  console.log(courseData);
  return courseData;
};

export const getCourseById = async (parent: any, arg: any) => {
  const id = arg.id;
  return id;
};

export const addCourses = async (
  parent: any,
  args: any,
  context: any,
  info: any
) => {
  //printing the value in console
//   console.log("Args => ", args.input)
  Course.create(args.input)
  // DB Logic
  return { statusCode: 200, message: "Data save successfully", success: true };
};

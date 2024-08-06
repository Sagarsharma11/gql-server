import {
  getAllCourses,
  getCourseById,
  getAllLectures,
  addCourses,
} from "../../controllers/course.controller.js";
import { addLecture } from "../../controllers/lecture.controller.js";
import { getAllUsers, getUserById } from "../../controllers/user.controller.js";

export const graphQLResolvers = {
  Query: {
    users: getAllUsers,
    courses: getAllCourses,
    course: getCourseById,
    lectures: getAllLectures,
    // lecture:getLectureById
  },
  Mutation: {
    course: addCourses,
    addLecture: addLecture,
  },
  Course: {
    instructor: async (parent: any) => {
      return await getUserById(parent.instructor);
    },
  },
  Lecture: {
    videoURL: (parent: any) => {
      // console.log("hey", parent["videoURL"]["_id"]);
      const obj = JSON.parse(JSON.stringify(parent["videoURL"]));
      return {
        _480px: obj["480px"],
        _720px: obj["720px"],
        _1080px: obj["1080px"],
      };
    },
  },
};

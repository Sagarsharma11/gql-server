import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import { schema } from "./graphQl/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getAllUsers, getUserById } from "./controllers/user.controller.js";
import { addCourses, getAllCourses, getAllLectures, getCourseById} from "./controllers/course.controller.js";
import { addLecture, getLectureById } from "./controllers/lecture.controller.js";
import { Lecture } from "./models/lecture.model.js";
// import { addLectureById } from "./controllers/lecture.controller.js";


dotenv.config({path:"./.env"});

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.port) || 3000;
const mongoURI = process.env.MONGODB_URI || "null";
connectDB(mongoURI)
const server = new ApolloServer({
  typeDefs:schema,
  resolvers:{
    Query:{
      users: getAllUsers,
      courses: getAllCourses,
      course: getCourseById,
      lectures:getAllLectures,
      // lecture:getLectureById
    },
    Mutation:{
      course:addCourses,
      addLecture:addLecture
    },
    Course:{
      instructor:async (parent)=>{
        return await getUserById(parent.instructor)
      }
    },
    Lecture:{
      videoURL: (parent) => {
        // console.log("hey", parent["videoURL"]["_id"]);
        const obj = JSON.parse(JSON.stringify(parent["videoURL"]))
        return {
          _480px: obj["480px"],
          _720px: obj["720px"],
          _1080px:obj["1080px"]
        };
      }
    }
  }
})

// Start the standalone server
startStandaloneServer(server, {
  listen: { port },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
}).catch(err => {
  console.error('Error starting server:', err);
});
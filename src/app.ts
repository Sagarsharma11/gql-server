import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone"
import { schema } from "./graphQl/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getAllUsers, getUserById } from "./controllers/user.controller.js";
import { addCourses, getAllCourses, getAllLectures, getCourseById} from "./controllers/course.controller.js";
import { addLecture } from "./controllers/lecture.controller.js";
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
      // lectures:getAllLectures
    },
    Mutation:{
      course:addCourses,
      addLecture:addLecture
    },
    Course:{
      instructor:async (parent)=>{
        return await getUserById(parent.instructor)
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
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./graphQl/schema/schema.js";
import { connectDB } from "./database/database.js";
import { getAllUsers } from "./controllers/user.controller.js";
import { addCourses, getAllCourses, getCourseById } from "./controllers/course.controller.js";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.port) || 3000;
const mongoURI = process.env.MONGODB_URI || "null";
connectDB(mongoURI);
const server = new ApolloServer({
    typeDefs: schema,
    resolvers: {
        Query: {
            // hello:()=>"Hello World",
            // wow:()=>"Wow",
            users: getAllUsers,
            courses: getAllCourses,
            course: getCourseById
        },
        Mutation: {
            course: addCourses
        }
    }
});
// Start the standalone server
startStandaloneServer(server, {
    listen: { port },
}).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
}).catch(err => {
    console.error('Error starting server:', err);
});

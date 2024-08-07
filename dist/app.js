import dotenv from "dotenv";
import { connectDB } from "./database/database.js";
import { connectGraphQl } from "./graphQl/graphql.js";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import morgan from "morgan";
import cors from "cors";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const Port = Number(process.env.port) || 3000;
const mongoURI = process.env.MONGODB_URI || "null";
connectDB(mongoURI);
// Start the standalone server
const graphQLServer = connectGraphQl(Port, envMode);
await graphQLServer.start();
const app = express();
app.use(express.json({
    limit: "10MB"
}));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(morgan("dev"));
app.get("*", (req, res) => {
    return res.status(404).json({
        success: false,
        message: "Page Not Found"
    });
});
app.get("/", (req, res) => {
    res.send("Home");
});
app.use("/graphql", expressMiddleware(graphQLServer));
app.listen(Port, () => {
    console.log(`app is listening on port: ${Port}`);
});
// function cors(arg0: { origin: string; credential: boolean; }): any {
//   throw new Error("Function not implemented.");
// }

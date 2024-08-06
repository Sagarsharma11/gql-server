import dotenv from "dotenv";
import { connectDB } from "./database/database.js";
import { connectGraphQl } from "./graphQl/graphql.js";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
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
app.get("/", (req, res) => {
    res.send("Home");
});
app.use("/graphql", expressMiddleware(graphQLServer));
app.listen(Port, () => {
    console.log(`app is listening on port: ${Port}`);
});

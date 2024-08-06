import { ApolloServer } from "@apollo/server";
import { graphQLResolvers } from "./resolvers/resolvers.js";
import { graphQlSchema } from "./schema/schema.js";
export const connectGraphQl = (port, envMode) => {
    const server = new ApolloServer({
        typeDefs: graphQlSchema,
        resolvers: graphQLResolvers,
    });
    //   startStandaloneServer(server, {
    //     listen: { port },
    //   })
    //     .then(({ url }) => {
    //       console.log(`🚀 Server ready at ${url}`);
    //     })
    //     .catch((err) => {
    //       console.error("Error starting server:", err);
    //     });
    return server;
};

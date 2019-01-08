import { GraphQLServer } from "graphql-yoga";
import resolver from "./resolver";

const server = new GraphQLServer({
  typeDefs: "./schema.graphql",
  resolvers: resolver
});

server.start(() => {
  console.log("Graphql Start");
});

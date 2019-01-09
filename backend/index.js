import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./query.graphql",
  resolvers
});

server.start(() => {
  console.log("graphql Start");
});

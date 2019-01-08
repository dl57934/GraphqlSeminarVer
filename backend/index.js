import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
const server = new GraphQLServer({
  typeDefs: "./queries/query.graphql",
  resolvers
});

server.start(() => {
  console.log("graphql Start");
});

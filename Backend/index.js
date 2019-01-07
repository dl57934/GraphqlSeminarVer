import { GraphQLServer } from "graphql-yoga";
import Resolvers from "./javascript/Resolver";

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers: Resolvers
});

server.start(() => console.log("graphql Start"));

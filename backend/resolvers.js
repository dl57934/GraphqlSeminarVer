import movieApi from "./movieApi";

const resolvers = {
  Query: {
    firstQuery: () => "hi GraphQL",
    queryWithArgu: (_, { id, name }) => `${id} + ${name}`,
    movieList: () => movieApi()
  }
};

export default resolvers;

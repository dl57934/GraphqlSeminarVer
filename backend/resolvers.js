import getMovieList from "./movieApi";

const resolvers = {
  Query: {
    firstSchema: () => "hi GraphQL",
    schemaWithParam: (_, { id }) => `내아이디는 ${id}`,
    getMovieDetails: () => getMovieList()
  }
};

const getMovieDetail = id => {
  return ``;
};

export default resolvers;

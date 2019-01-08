const resolver = {
  Query: {
    firstSchema: () => "hi Graphql",
    schemaWithArguments: (_, { id, age }) => `${id} 나이: ${age}`,
    getMovieDetail: (_, { id, name, story }) => getMovie(id, name, story)
  },
  Mutation: {
    changeAge: (_, { id }) => id
  }
};

const getMovie = (id, name, story) => {
  return {
    actor: id,
    name,
    story: "뉴트와 동물 친구들이 함께 떠나는 환상의 모험"
  };
};

export default resolver;

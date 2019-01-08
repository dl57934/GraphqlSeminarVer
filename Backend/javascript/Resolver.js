const Resolvers = {
  Query: {
    firstSchema: () => "hi Graphql + Node.js",
    secondSchema: (_, { input1, input2 }) => secondSchema(input1, input2),
    getMovieDetail: (_, { id }) => movieInfo(id)
  }
};

const movieInfo = id => {
  return {
    id,
    name: "동물사전",
    story: "뉴트와 친구들 그리고 동물들과 떠나는 환상의 여행"
  };
};

const secondSchema = (input1, input2) => {
  return `${input1}과 ${input2}가 입력 됐어요.`;
};

export default Resolvers;

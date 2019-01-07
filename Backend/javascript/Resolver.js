const Resolvers = {
  Query: {
    firstSchema: () => "hi Graphql + Node.js",
    secondSchema: (_, { input1, input2 }) => secondSchema(input1, input2)
  }
};

const secondSchema = (input1, input2) => {
  return `${input1}과 ${input2}가 입력 됐어요.`;
};

export default Resolvers;

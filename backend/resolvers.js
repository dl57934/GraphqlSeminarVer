const resolvers = {
  Query: {
    firstSchema: () => "hi GraphQL Server",
    schemaWithArguments: (_, { name }) => name
  }
};

export default resolvers;

module.exports = (AppDataSource) => {
  let UserResolver = require("./user")(AppDataSource.getRepository("User"));

  return {
    PostgressQueryResolvers: {
      ...UserResolver.Query,
    },
    PostgressMutationResolvers: {
      ...UserResolver.Mutation,
    },
  };
};
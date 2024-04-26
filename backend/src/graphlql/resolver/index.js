module.exports = (MongoDb) => {
  let UserResolver = require("./user")(MongoDb);

  return {
    QueryResolvers: {
      ...UserResolver.Query,
    },
    MutationResolvers: {
      ...UserResolver.Mutation,
    },
  };
};
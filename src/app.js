var express = require("express")
require('dotenv').config();
const { ApolloServer } = require('@apollo/server')
const typeDefs = require('./graphlql/schema')
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoDb = require("./graphlql/plugins/mongoConnection").MongoDb;
const { expressMiddleware } = require('@apollo/server/express4');

let { QueryResolvers, MutationResolvers } = require("./graphlql/resolver")(MongoDb);


const resolvers = {
  Mutation: {
    ...MutationResolvers,
  },
  Query: {
    ...QueryResolvers,
  },
};


async function initServer() {
  const app = express()

  const apolloServer = new ApolloServer(
    {
      typeDefs,
      resolvers
    }
  )

  await apolloServer.start()

  app.use(
    cors(),
    bodyParser.json(),
    expressMiddleware(apolloServer),
  );


  app.use((req, res) => {
    res.send("Server start successfully")
  })

  const PORT = process.env.PORT || 4000

  app.listen(PORT, () => {
    console.log(`Node js server is running on PORT ${PORT}`)
  })
}


initServer()

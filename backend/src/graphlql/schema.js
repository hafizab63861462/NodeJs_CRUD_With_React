const typeDefs = `#graphql
scalar JSON

type Query{
  getUsers: JSON
  getUser(userId: ID): JSON
}

type Mutation {
  addUser(user: JSON): JSON
  updateUser(user: JSON): JSON
  deleteUser(userId: ID): JSON
}
`
module.exports = typeDefs 

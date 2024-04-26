const typeDefs = `#graphql
scalar JSON

type Query{
  getUsers: JSON
}

type Mutation {
  addUser(user: JSON): JSON
  updateUser(user: JSON): JSON
  deleteUser(userId: String): JSON
}
`
module.exports = typeDefs 

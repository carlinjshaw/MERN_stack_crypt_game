const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User{
    _id:ID
    username: String
    email:String
  }

  type item{
    itemId: ID
    name: String
    HP: Int
    attack: Int
  }


  type Auth{
    token:ID!
    user: User
}
type Query {
  me: User
}


  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharacter(name: String!, HP: Int!, attack: Int!):User
  }`


  module.exports = typeDefs;
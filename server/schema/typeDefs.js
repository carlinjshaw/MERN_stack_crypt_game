const { gql } = require("apollo-server-express");

const typeDefs = gql`
type Query {
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  
  addUser(username: String!, email: String!, password: String!, characters): Auth
  
  addCharacter(name: String, attack: Int, HP: Int): Character
}

  type Character {
    HP: Int
    attack: Int
    _id: ID!
    name: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
  }
`;

module.exports = typeDefs;

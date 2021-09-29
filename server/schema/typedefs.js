const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addCharacter(name: String, attack: Int, HP: Int): Character
  }

  type Character {
    name: String
    HP: Int
    _id: ID!
    name: String
    HP: Int
    attack: Int
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

const { gql } = require("apollo-server-express");

const typeDefs = gql`

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Character {
    _id: ID!
    Id: String
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

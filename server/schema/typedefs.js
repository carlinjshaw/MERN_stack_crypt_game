const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
<<<<<<< HEAD
    addCharacter(name: String, attack: Int, HP: Int ):Character
=======
    addCharacter(name: String, attack: Int, HP: Int): Character
>>>>>>> 8049680a4d270e3e9fbaac8577b0a6c86981dc54
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

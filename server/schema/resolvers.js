const { AuthenticationError } = require('apollo-server-express');
const { User} = require('../models');
// const { findOneAndUpdate } = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    
  },

  Mutation: {
    addUser: async (parent, args) => {
      console.log("add user running")
      const user = await User.create(args);
      console.log("user created")
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne( {email} );

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addCharacter: async (parent, args, context) => {
      console.log("add character running")
      const character = await Character.create(args);
      console.log("character created")
      const updateUser = await User.findOneAndUpdate({
        _id: context.user._id
      }, {
        $push: {
          characters: character
        }
      }, {
        new: true
      }
      )
      return { updateUser };


    },



  }
};

module.exports = resolvers;
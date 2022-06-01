const { User, Comment } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                // .populate('thoughts')
                // .populate('friends');
          
              return userData;
            }
          
            throw new AuthenticationError('Not logged in');
          },    
     users: async () => {
         return User.find()
         .select('-__v -password')
        //  .populate('comments')

     },   
     user: async (parent, { username }) => {
        return User.find()
        .select('-__v -password')
        // .populate('comments')
     },   
     comment: async ({parent, _id}) => {
         return Comment.findOne({ _id })
     }
     },
     Mutation: {
         addUser: async (parent, args) => {
             const user = await User.create(args);
             const token = signToken(user);
             
             return { user, token };
         },
         addComment: async (parent, args, context) => {
            if (context.user) {
              const Comment = await Comment.create({ ...args, username: context.user.username });
          
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { comments: comment._id } },
                { new: true }
              );
          
              return comment;
            }
          
            throw new AuthenticationError('You need to be logged in!');
          }, 

         login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
        //   getting "user.isCorrectPassword is not a function" error in apollographql
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          },
     }
    }




    
;

module.exports = resolvers;
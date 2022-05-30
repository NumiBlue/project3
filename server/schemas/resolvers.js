const { User, Comment } = require('../models');

const resolvers = {
    Query: {
     comment: async ({parent, _id}) => {
         return Comment.findOne({ _id })
     }
     } 
    }




    
;

module.exports = resolvers;
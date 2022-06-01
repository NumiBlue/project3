const { gql } = require('apollo-server-express');

// models are to be filled in below
const typeDefs = gql` 
type User{
    _id: ID!
    username: String
    email: String
    comments: [Comment]
}

type Comment {
     _id: ID
     commentText: String
     createdAt: String
     username: String
     subCommentCount: Int
     subComment: [subComment]
}
type subComment {
    _id: ID
    reactioBody: String
    createdAt: String
    username: String
    
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    comment(_id: ID!): Comment
    users: [User]
    user(username: String!): User
} 

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(CommentId: ID!, commentBody: String!): Comment
    addSubcomment(thoughtId: ID!, subcommentBody: String!): Comment
}
`;
// this goes in Mutation {}
// login(email: String!, password: String!): Auth
// addUser(username: String!, email: String!, password: String!): Auth
// addComment(thoughtId: ID!, reatcionBody: String!): Comment






// }

module.exports = typeDefs;
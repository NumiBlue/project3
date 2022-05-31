const { Schema, model } = require('mongoose');
const subCommentSchema = require('./Subcomment');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: 'You need to leave a comment!',
            minlength: 1,
            maxlength: 230        
        },
    
        createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
    );

const Comment = model('Comment', commentSchema);

module.exports = Comment;

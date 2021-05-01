const { Comment } = require("../models");

const commentData = [
    {
        "comment_text": "Music Near Me",
        "user_id": 1,
        "post_id": 1
    },
    {
        "comment_text": "The Ultimate Tech Quiz",
        "user_id": 2,
        "post_id": 2
    },
    {
        "comment_text": "Roll 'Em Up",
        "user_id": 3,
        "post_id": 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
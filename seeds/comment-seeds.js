const { Comment } = require("../models");

const commentData = [
    {
        "comment_text": "Wow so cool.",
        "user_id": 1,
        "post_id": 1
    },
    {
        "comment_text": "Hey, pretty neat.",
        "user_id": 2,
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
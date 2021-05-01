const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// A user can have many posts
// Delete associated posts when delete user
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// A user can have many comments
// Delete associated comments when delete user
User.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE"
});

// A post belongs to a user
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// A post can have many comments
Post.hasMany(Comment, {
  foreignKey: "comment_id",
  onDelete: "CASCADE"
});

// A comment belongs to a post
Comment.belongsTo(Post, {
  foreignKey: "comment_id"
});

// A comment belongs to a user
Comment.belongsTo(User, {
  foreignKey: "user_id"
});

module.exports = { User, Post, Comment };

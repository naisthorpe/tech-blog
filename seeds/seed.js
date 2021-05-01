const seedUsers = require('./user-seeds.json');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');
const { User } = require('../models');

const seedAll = async () => {

  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUsers, {
    individualHooks: true,
    returning: true
  });

  await seedPosts();

  await seedComments();

  process.exit(0);
};

seedAll();

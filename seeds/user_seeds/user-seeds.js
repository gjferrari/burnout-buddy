const { User } = require("../models");

const userData = [];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

//look up what bulkCreate

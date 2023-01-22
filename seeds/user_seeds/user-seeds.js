const { User } = require("../../models/user_models/User");

const userData = [
  {
    name: "Sal",
    email: "sal@hotmail.com",
    password: "password12345",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;

//look up what bulkCreate

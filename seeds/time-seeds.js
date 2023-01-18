const { Time } = require("../models");

const timeData = [
  {
    time_amount: "5 minutes",
  },
  {
    time_amount: "10 minutes",
  },
  {
    time_amount: "15 minutes",
  },
  {
    time_amount: "20 minutes",
  },
  {
    time_amount: "30 minutes",
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;

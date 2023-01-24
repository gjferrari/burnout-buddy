const { ProductTime } = require("../models");

const productTimeData = [
  {
    product_id: 1,
    time_id: 1,
  },
  {
    product_id: 2,
    time_id: 1,
  },
  {
    product_id: 3,
    time_id: 1,
  },
  {
    product_id: 4,
    time_id: 1,
  },
  {
    product_id: 5,
    time_id: 1,
  },
  {
    product_id: 6,
    time_id: 1,
  },
  {
    product_id: 7,
    time_id: 2,
  },
  {
    product_id: 8,
    time_id: 2,
  },
  {
    product_id: 9,
    time_id: 2,
  },
  {
    product_id: 10,
    time_id: 2,
  },
  {
    product_id: 11,
    time_id: 2,
  },
  {
    product_id: 12,
    time_id: 2,
  },
  {
    product_id: 13,
    time_id: 2,
  },
  {
    product_id: 14,
    time_id: 2,
  },
  {
    product_id: 15,
    time_id: 2,
  },
  {
    product_id: 16,
    time_id: 2,
  },
  {
    product_id: 17,
    time_id: 2,
  },
  {
    product_id: 18,
    time_id: 2,
  },
  {
    product_id: 19,
    time_id: 3,
  },
  {
    product_id: 20,
    time_id: 3,
  },
  {
    product_id: 21,
    time_id: 3,
  },
  {
    product_id: 22,
    time_id: 3,
  },
  {
    product_id: 23,
    time_id: 3,
  },
  {
    product_id: 24,
    time_id: 3,
  },
  {
    product_id: 25,
    time_id: 3,
  },
  {
    product_id: 26,
    time_id: 3,
  },
  {
    product_id: 27,
    time_id: 3,
  },
  {
    product_id: 28,
    time_id: 3,
  },
  {
    product_id: 29,
    time_id: 3,
  },
  {
    product_id: 30,
    time_id: 3,
  },
  {
    product_id: 31,
    time_id: 4,
  },
  {
    product_id: 32,
    time_id: 4,
  },
  {
    product_id: 33,
    time_id: 4,
  },
  {
    product_id: 34,
    time_id: 4,
  },
  {
    product_id: 35,
    time_id: 4,
  },
  {
    product_id: 36,
    time_id: 4,
  },
  {
    product_id: 37,
    time_id: 5,
  },
  {
    product_id: 38,
    time_id: 5,
  },
  {
    product_id: 39,
    time_id: 5,
  },
  {
    product_id: 40,
    time_id: 5,
  },
  {
    product_id: 41,
    time_id: 5,
  },
  {
    product_id: 42,
    time_id: 5,
  },
];

const seedProductTimes = () => ProductTime.bulkCreate(productTimeData);

module.exports = seedProductTimes;

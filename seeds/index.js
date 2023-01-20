const seedCategories = require("./category-seeds");
const seedProducts = require("./product-seeds");
const seedTime = require("./time-seeds");
const seedProductTimes = require("./product-time-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedCategories();
  console.log("\n----- CATEGORIES SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedTime();
  console.log("\n----- TAGS SEEDED -----\n");

  await seedProductTimes();
  console.log("\n----- PRODUCT TAGS SEEDED -----\n");

  process.exit(0);
};

seedAll();

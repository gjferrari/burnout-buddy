const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Mindfulness",
  },
  {
    category_name: "Movement",
  },
  {
    category_name: "Outreach",
  },
  {
    category_name: "Distract",
  },
  {
    category_name: "Create",
  },
  {
    category_name: "Rest",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;

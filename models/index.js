// import models
const Product = require("./Product");
const Category = require("./Category");
const Time = require("./Time");
const ProductTime = require("./ProductTime");
const User = require("./user_models/User");

// Feeling.belongsToMany(User);
// User.hasMany

// Products belongsTo Category
Product.belongsTo(Category);

// Categories have many Products
Category.hasMany(Product);

// Products belongToMany Time (through ProductTime)
Product.belongsToMany(Time, {
  through: {
    model: ProductTime,
    unique: false,
  },
});
// Time belongToMany Products (through ProductTime)

Time.belongsToMany(Product, {
  through: {
    model: ProductTime,
    unique: false,
  },
});

module.exports = {
  Product,
  Category,
  Time,
  ProductTime,
  User,
};

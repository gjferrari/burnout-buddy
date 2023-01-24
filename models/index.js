// import models
const Product = require("./Product");
const Category = require("./Category");
const Time = require("./Time");
const ProductTime = require("./ProductTime");
const User = require("./User");
const Question = require("./Questions");
const Feeling = require("./Feeling");

// Feeling.belongsToMany(User);
// User.hasMany

User.hasMany(Feeling, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Feeling.belongsTo(User, {
  foreignKey: "user_id",
});
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
  Question,
  Feeling,
};

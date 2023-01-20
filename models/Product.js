// import important parts of sequelize library
const { Model, Product } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection.js");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_link: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      },
    },
    //IS THERE A DATATYPE FOR LINKS?
    time_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "time",
        key: "id",
        unique: false,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "category",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;

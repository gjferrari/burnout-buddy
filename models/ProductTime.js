const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTime extends Model {}

ProductTime.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id",
        unique: false,
      },
    },
    time_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "time",
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
    modelName: "product_time",
  }
);

module.exports = ProductTime;

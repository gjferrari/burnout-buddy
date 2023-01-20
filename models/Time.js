const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Time extends Model {}

Time.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    time_amount: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "time",
  }
);

module.exports = Time;

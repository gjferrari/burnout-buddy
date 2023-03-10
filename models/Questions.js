// add model for quiz questions
const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Questions extends Model {}

Questions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    question_feeling: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    // question_time: {
    //   type: DataTypes.JSON,
    //   allowNull: false,
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "questions",
  }
);

module.exports = Questions;

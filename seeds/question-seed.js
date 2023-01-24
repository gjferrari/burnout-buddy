const { Question } = require("../models");

const questionData = [
  {
    question_feeling: "Sad",
  },
  {
    question_feeling: "Excited",
  },
  {
    question_feeling: "Afraid",
  },
  {
    question_feeling: "Calm",
  },
  {
    question_feeling: "Anxious",
  },
  {
    question_feeling: "Foggy",
  },
  {
    question_feeling: "Overwhelmed",
  },
  {
    question_feeling: "Surprised",
  },
  {
    question_feeling: "Silly",
  },
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;

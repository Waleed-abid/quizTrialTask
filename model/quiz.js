const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  answerIndex: {
    type: Number,
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

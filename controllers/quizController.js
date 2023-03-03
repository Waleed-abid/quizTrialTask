const Quiz = require("../model/quiz");

// Create a new quiz
exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz({
      name: req.body.name,
      questions: req.body.questions,
    });
    const savedQuiz = await newQuiz.save();
    res.status(201).json({ success: true, erorrs: false, data: savedQuiz });
  } catch (err) {
    res.status(500).json({ success: false, erorrs: [err.message] });
  }
};

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json({ success: true, erorrs: false, data: quizzes });
  } catch (err) {
    res.status(500).json({ success: false, erorrs: err.message });
  }
};

// Get a quiz by ID
exports.getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz)
      return res.status(404).json({ success: false, erorrs: "Quiz not found" });
    res.json({ success: true, erorrs: false, data: quiz });
  } catch (err) {
    res.status(500).json({ success: false, erorrs: err.message });
  }
};

// Update a quiz by ID
exports.updateQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz)
      return res.status(404).json({ success: false, erorrs: "Quiz not found" });
    quiz.name = req.body.name;
    quiz.questions = req.body.questions;
    const savedQuiz = await quiz.save();
    res.json({ success: true, erorrs: false, data: savedQuiz });
  } catch (err) {
    res.status(500).json({ success: false, erorrs: err.message });
  }
};

// Delete a quiz by ID
exports.deleteQuizById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Quiz.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ success: false, error: "Quiz not found" });
    }
    return res
      .status(200)
      .send({ success: true, erorrs: false, data: "Deleted Sucessfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: "Server error" });
  }
};

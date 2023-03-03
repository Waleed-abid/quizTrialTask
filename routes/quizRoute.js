const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");

// Create a new quiz
router.post("/", quizController.createQuiz);

// Get all quizzes
router.get("/", quizController.getQuizzes);

// Get a quiz by ID
router.get("/:id", quizController.getQuizById);

// Update a quiz by ID
router.put("/:id", quizController.updateQuizById);

// Delete a quiz by ID
router.delete("/:id", quizController.deleteQuizById);

module.exports = router;

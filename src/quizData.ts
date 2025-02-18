import { QuizDataType } from "@/types/quiz";

export const quizQuestions: QuizDataType = [
  {
    id: 1,
    type: "mcq",
    description: "Which planet is closest to the Sun?",
    options: [
      { id: 1, description: "Venus" },
      { id: 2, description: "Mercury", is_correct: true },
      { id: 3, description: "Earth" },
      { id: 4, description: "Mars" },
    ],
  },
  {
    id: 2,
    type: "mcq",
    description:
      "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
    options: [
      { id: 5, description: "Stack" },
      { id: 6, description: "Queue", is_correct: true },
      { id: 7, description: "Tree" },
      { id: 8, description: "Graph" },
    ],
  },
  {
    id: 3,
    type: "mcq",
    description:
      "Which of the following is primarily used for structuring web pages?",
    options: [
      { id: 9, description: "Python" },
      { id: 10, description: "Java" },
      { id: 11, description: "HTML", is_correct: true },
      { id: 12, description: "C++" },
    ],
  },
  {
    id: 4,
    type: "mcq",
    description: "Which chemical symbol stands for Gold?",
    options: [
      { id: 13, description: "Au", is_correct: true },
      { id: 14, description: "Gd" },
      { id: 15, description: "Ag" },
      { id: 16, description: "Pt" },
    ],
  },
  {
    id: 5,
    type: "mcq",
    description:
      "Which of these processes is not typically involved in refining petroleum?",
    options: [
      { id: 17, description: "Fractional distillation" },
      { id: 18, description: "Cracking" },
      { id: 19, description: "Polymerization" },
      { id: 20, description: "Filtration", is_correct: true },
    ],
  },
  // Integer Type Questions
  {
    id: 6,
    type: "integer",
    description: "What is the value of 12 + 28?",
    correctAnswer: "40",
  },
  {
    id: 7,
    type: "integer",
    description: "How many states are there in the United States?",
    correctAnswer: "50",
  },
  {
    id: 8,
    type: "integer",
    description: "In which year was the Declaration of Independence signed?",
    correctAnswer: "1776",
  },
  {
    id: 9,
    type: "integer",
    description: "What is the value of pi rounded to the nearest integer?",
    correctAnswer: "3",
  },
  {
    id: 10,
    type: "integer",
    description:
      "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
    correctAnswer: "120",
  },
];

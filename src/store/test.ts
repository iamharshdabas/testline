import { create } from "zustand";
import localforage from "localforage";

import { QuestionType } from "@/types/quiz";

const DB_KEY = "quiz_attempt_history";

type TestState = {
  currentQuestionIndex: number;
  userAnswers: { value: number | string | null; isSubmitted: boolean }[];
  progress: number;
  showResult: boolean;
  questions: QuestionType[];
  attemptHistory: { score: number; timestamp: string }[];
  initializeUserAnswers: (questions: QuestionType[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setUserAnswer: (questionIndex: number, answer: number | string) => void;
  setUserAnswerSubmitted: (questionIndex: number) => void;
  setShowResult: (show: boolean) => void;
  resetTest: () => void;
  initializeAttemptHistoryFromDB: () => void;
  recordAttempt: (score: number) => void;
};

export const useTestStore = create<TestState>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: [],
  progress: 0,
  showResult: false,
  questions: [],
  attemptHistory: [],

  initializeAttemptHistoryFromDB: async () => {
    try {
      const historyFromDB = await localforage.getItem(DB_KEY);

      if (historyFromDB) {
        set({
          attemptHistory: historyFromDB as {
            score: number;
            timestamp: string;
          }[],
        });
      }
    } catch (error) {
      console.error("Error loading attempt history from IndexedDB:", error);
    }
  },

  recordAttempt: async (score) => {
    const timestamp = new Date().toLocaleString();
    const newAttempt = { score, timestamp };

    set((state) => {
      const updatedHistory = [...state.attemptHistory, newAttempt];

      localforage.setItem(DB_KEY, updatedHistory).catch((error) => {
        console.error("Error saving attempt history to IndexedDB:", error);
      });

      return { attemptHistory: updatedHistory };
    });
  },

  initializeUserAnswers: (questions) =>
    set({
      userAnswers: questions.map(() => ({ value: null, isSubmitted: false })),
      questions,
      progress: 0,
      currentQuestionIndex: 0,
      showResult: false,
    }),

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  setUserAnswer: (questionIndex, answer) =>
    set((state) => {
      const newUserAnswers = [...state.userAnswers];

      newUserAnswers[questionIndex] = {
        ...newUserAnswers[questionIndex],
        value: answer,
      };

      return { userAnswers: newUserAnswers };
    }),

  setUserAnswerSubmitted: (questionIndex) =>
    set((state) => {
      const newUserAnswers = [...state.userAnswers];

      newUserAnswers[questionIndex] = {
        ...newUserAnswers[questionIndex],
        isSubmitted: true,
      };
      const progress =
        newUserAnswers.filter((answer) => answer.isSubmitted).length /
        state.questions.length;

      return { userAnswers: newUserAnswers, progress };
    }),

  setShowResult: (show) => set({ showResult: show }),
  resetTest: () =>
    set((state) => ({
      currentQuestionIndex: 0,
      userAnswers: state.questions.map(() => ({
        value: null,
        isSubmitted: false,
      })),
      progress: 0,
      showResult: false,
      questions: state.questions,
    })),
}));

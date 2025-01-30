import { create } from "zustand";

import { Question } from "@/types/test";

type TestState = {
  currentQuestionIndex: number;
  userAnswers: { value: number | null; isSubmitted: boolean }[];
  progress: number;
  stopwatchSeconds: number;
  isTimerRunning: boolean;
  showResult: boolean;
  questions: Question[];
  initializeUserAnswers: (questions: Question[]) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setUserAnswer: (questionIndex: number, answerIndex: number) => void;
  setUserAnswerSubmitted: (questionIndex: number) => void;
  setStopwatchSeconds: (seconds: number) => void;
  startStopwatch: () => void;
  stopStopwatch: () => void;
  decrementStopwatch: () => void;
  setShowResult: (show: boolean) => void;
  resetTest: () => void;
};

export const useTestStore = create<TestState>((set) => ({
  currentQuestionIndex: 0,
  userAnswers: [],
  progress: 0,
  stopwatchSeconds: 0,
  isTimerRunning: false,
  showResult: false,
  questions: [],

  initializeUserAnswers: (questions) =>
    set({
      userAnswers: questions.map(() => ({ value: null, isSubmitted: false })),
      questions,
    }),

  setCurrentQuestionIndex: (index) => set({ currentQuestionIndex: index }),

  setUserAnswer: (questionIndex, answerIndex) =>
    set((state) => {
      const newUserAnswers = [...state.userAnswers];

      newUserAnswers[questionIndex] = {
        ...newUserAnswers[questionIndex],
        value: answerIndex,
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

  setStopwatchSeconds: (seconds) => set({ stopwatchSeconds: seconds }),
  startStopwatch: () => set({ isTimerRunning: true }),
  stopStopwatch: () => set({ isTimerRunning: false }),
  decrementStopwatch: () =>
    set((state) => ({ stopwatchSeconds: state.stopwatchSeconds - 1 })),
  setShowResult: (show) => set({ showResult: show }),
  resetTest: () =>
    set({
      currentQuestionIndex: 0,
      userAnswers: [],
      progress: 0,
      stopwatchSeconds: 0,
      isTimerRunning: false,
      showResult: false,
      questions: [],
      // a quick fix to reset the useEffect in the Test component
      initializeUserAnswers: (questions) =>
        set({
          userAnswers: questions.map(() => ({
            value: null,
            isSubmitted: false,
          })),
          questions,
        }),
    }),
}));

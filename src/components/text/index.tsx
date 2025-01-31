import { Spinner } from "@heroui/spinner";
import { useEffect } from "react";

import QuestionCard from "./card";
import Result from "./result";
import { StopwatchAction, StopwatchView } from "./stopwatch";

import { Question } from "@/types/test";
import { useTestStore } from "@/store/test";

type Props = {
  questions: Question[];
  time?: number;
};

export default function Test({ questions, time = 15 * 60 }: Props) {
  const { showResult, userAnswers, isTimerRunning, initializeUserAnswers } =
    useTestStore();

  useEffect(() => {
    initializeUserAnswers(questions);
  }, [questions, initializeUserAnswers]);

  if (!userAnswers.length) {
    return (
      <div className="grid place-items-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {showResult ? (
        <Result />
      ) : (
        <>
          <StopwatchView time={time} />
          {!isTimerRunning ? <StopwatchAction time={time} /> : <QuestionCard />}
        </>
      )}
    </div>
  );
}

import { Spinner } from "@heroui/spinner";
import { useEffect } from "react";

import QuestionCard from "./card";
import Result from "./result";

import { QuestionType } from "@/types/quiz";
import { useTestStore } from "@/store/test";

type Props = {
  questions: QuestionType[];
};

export default function Test({ questions }: Props) {
  const { showResult, userAnswers, initializeUserAnswers } = useTestStore();

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
      {showResult ? <Result /> : <QuestionCard />}
    </div>
  );
}

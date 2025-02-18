import { Button } from "@heroui/button";
import { useEffect, useRef } from "react";

import AttemptHistory from "./history";

import { text } from "@/config/primitives";
import { useTestStore } from "@/store/test";
import { OptionType, QuestionType } from "@/types/quiz";
import { checkIntegerAnswer } from "@/utils/helpers";

const Result: React.FC = () => {
  const { userAnswers, questions, resetTest, recordAttempt } = useTestStore();
  const attemptRecorded = useRef(false);

  const rightAnswers = questions.reduce(
    (acc: number[], question: QuestionType, index: number) => {
      let isCorrect = false;

      if (question.type === "mcq") {
        const correctAnswer = (
          question as QuestionType & { options: OptionType[] }
        ).options?.find((option) => option.is_correct);

        if (userAnswers[index].value === correctAnswer?.id) {
          isCorrect = true;
        }
      } else if (question.type === "integer") {
        if (
          checkIntegerAnswer(userAnswers[index].value, question.correctAnswer)
        ) {
          isCorrect = true;
        }
      }

      if (isCorrect) {
        acc.push(question.id);
      }

      return acc;
    },
    [] as number[],
  );

  const score = rightAnswers.length * 10;
  const totalScore = questions.length * 10;

  useEffect(() => {
    if (!attemptRecorded.current) {
      recordAttempt(score);
      attemptRecorded.current = true;
    }
  }, [score, recordAttempt]);

  return (
    <div className="text-center flex justify-center items-center flex-col">
      <p className={text({ size: "md" })}>
        You scored&nbsp;
        <span className="font-mono">
          {score}/{totalScore}
        </span>
        &nbsp;on the test.
      </p>
      <Button onPress={resetTest}>Retake</Button>
      <AttemptHistory />
    </div>
  );
};

export default Result;

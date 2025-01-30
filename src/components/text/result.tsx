import { Button } from "@heroui/button";

import { text } from "@/config/primitives";
import { useTestStore } from "@/store/test";

export default function Result() {
  const { userAnswers, questions, resetTest } = useTestStore();

  const rightAnswers = questions.reduce((acc, question, index) => {
    const correctAnswer = question.options.find((option) => option.is_correct);

    if (userAnswers[index].value === correctAnswer?.id) {
      acc.push(question.id);
    }

    return acc;
  }, [] as number[]);

  const score = rightAnswers.length * 10;
  const totalScore = questions.length * 10;

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
    </div>
  );
}

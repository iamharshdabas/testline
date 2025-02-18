import { Card, CardBody, CardHeader } from "@heroui/card";

import { text } from "@/config/primitives";
import { useTestStore } from "@/store/test";
import { quizQuestions } from "@/quizData";

const AttemptHistory: React.FC = () => {
  const { attemptHistory } = useTestStore();

  if (attemptHistory.length === 0) {
    return (
      <p
        className={text({
          size: "sm",
          wide: true,
          class: "mt-4 text-gray-500 text-center",
        })}
      >
        No attempts yet.
      </p>
    );
  }

  return (
    <Card className="mt-4">
      <CardHeader>
        <p className={text({ size: "md", bold: true })}>Attempt History</p>
      </CardHeader>
      <CardBody>
        <ul className="list-disc pl-5">
          {attemptHistory.map((attempt, index) => (
            <li key={index} className="mb-2">
              <p className={text({ size: "sm" })}>
                Attempt {index + 1}: Score - {attempt.score}/
                {quizQuestions.length * 10}, Time - {attempt.timestamp}
              </p>
            </li>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};

export default AttemptHistory;

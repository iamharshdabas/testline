import Test from "@/components/text";
import { text } from "@/config/primitives";
import { quizQuestions } from "@/quizData";
import { QuestionType } from "@/types/quiz";

interface TestPageProps {
  questions?: QuestionType[];
}

export default function TestPage({ questions = quizQuestions }: TestPageProps) {
  const data = { questions };

  return (
    <div>
      {data ? (
        <Test questions={data.questions} />
      ) : (
        <h1 className={text({ size: "sm", color: "pink" })}>
          Something went wrong!
        </h1>
      )}
    </div>
  );
}

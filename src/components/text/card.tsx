import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Progress } from "@heroui/progress";
import { Radio, RadioGroup } from "@heroui/radio";
import ReactMarkdown from "react-markdown";

import { useTestStore } from "@/store/test";

export default function QuestionCard() {
  const {
    progress,
    questions,
    userAnswers,
    currentQuestionIndex,
    setShowResult,
    setUserAnswer,
    setUserAnswerSubmitted,
    setCurrentQuestionIndex,
  } = useTestStore();

  const question = questions[currentQuestionIndex];
  const selectedOption = question.options.find(
    (option) => option.id === userAnswers[currentQuestionIndex]?.value,
  );

  const handleOptionChange = (value: string) => {
    setUserAnswer(currentQuestionIndex, parseInt(value));
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    setUserAnswerSubmitted(currentQuestionIndex);
  };

  return (
    <Card>
      <CardHeader className="flex-col items-start">
        <Progress
          classNames={{
            base: "pb-4",
            indicator: "bg-gradient-to-r from-[#6FEE8D] to-[#17c964]",
          }}
          label="Test progress"
          showValueLabel={true}
          size="sm"
          value={progress * 100}
        />
        {question.description}
      </CardHeader>
      <Divider />
      <CardBody>
        <RadioGroup
          isDisabled={userAnswers[currentQuestionIndex]?.isSubmitted}
          value={userAnswers[currentQuestionIndex]?.value?.toString() || ""}
          onValueChange={handleOptionChange}
        >
          {question.options.map((option) => (
            <Radio
              key={option.id}
              className="max-w-full"
              value={option.id.toString()}
            >
              {option.description}
            </Radio>
          ))}
        </RadioGroup>
      </CardBody>
      <CardFooter className="gap-4">
        {currentQuestionIndex > 0 && (
          <Button color="primary" variant="light" onPress={handlePrev}>
            Previous
          </Button>
        )}
        {userAnswers[currentQuestionIndex]?.isSubmitted ? (
          <Button color="primary" variant="flat" onPress={handleNext}>
            Next
          </Button>
        ) : (
          <Button
            color="primary"
            isDisabled={userAnswers[currentQuestionIndex]?.value === null}
            onPress={handleSubmit}
          >
            Submit
          </Button>
        )}
      </CardFooter>
      {userAnswers[currentQuestionIndex]?.isSubmitted && (
        <Card>
          <CardHeader>
            <Alert
              color={selectedOption?.is_correct ? "success" : "danger"}
              title={selectedOption?.is_correct ? "Correct" : "Incorrect"}
              variant="solid"
            />
          </CardHeader>
          <CardBody>
            <ReactMarkdown>{question.detailed_solution}</ReactMarkdown>
          </CardBody>
        </Card>
      )}
    </Card>
  );
}

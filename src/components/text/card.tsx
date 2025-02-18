import { Alert } from "@heroui/alert";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Input } from "@heroui/input";
import { Progress } from "@heroui/progress";
import { Radio, RadioGroup } from "@heroui/radio";
import { useEffect, useRef, useState } from "react";

import { useTestStore } from "@/store/test";
import { OptionType, QuestionType } from "@/types/quiz";
import { checkIntegerAnswer } from "@/utils/helpers";

interface QuestionCardProps {}

const QuestionCard: React.FC<QuestionCardProps> = () => {
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
  const selectedOption = (
    question as QuestionType & { options: OptionType[] }
  ).options?.find(
    (option) => option.id === userAnswers[currentQuestionIndex]?.value,
  );

  const [integerAnswer, setIntegerAnswer] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const timerRef = useRef<number | null>(null);
  const attemptRecorded = useRef<boolean>(false);

  useEffect(() => {
    setTimeLeft(30);
    attemptRecorded.current = false;
    if (question.type === "integer") {
      if (
        !userAnswers[currentQuestionIndex]?.isSubmitted &&
        userAnswers[currentQuestionIndex]?.value !== null
      ) {
        setIntegerAnswer(String(userAnswers[currentQuestionIndex]?.value));
      } else if (!userAnswers[currentQuestionIndex]?.isSubmitted) {
        setIntegerAnswer("");
      }
    }
  }, [currentQuestionIndex, question.type, userAnswers]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (!attemptRecorded.current) {
        attemptRecorded.current = true;
        handleSubmit();
      }
    }

    if (timeLeft > 0) {
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [timeLeft]);

  const handleOptionChange = (value: string) => {
    setUserAnswer(currentQuestionIndex, parseInt(value));
    setIntegerAnswer("");
  };

  const handleIntegerAnswerChange = (value: string) => {
    const integerValue = value.replace(/[^0-9]/g, "");

    setIntegerAnswer(integerValue);
    setUserAnswer(currentQuestionIndex, integerValue);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
    setTimeLeft(30);
  };

  const handleNext = () => {
    if (currentQuestionIndex === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimeLeft(30);
    }
  };

  const handleSubmit = () => {
    if (attemptRecorded.current) return;

    setUserAnswerSubmitted(currentQuestionIndex);

    clearInterval(timerRef.current as number);
    timerRef.current = null;
    attemptRecorded.current = true;
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
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
        <div className="flex justify-between w-full items-center">
          <span>{question.description}</span>
          <span className="font-mono">{formatTime(timeLeft)}</span>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        {question.type === "mcq" ? (
          <RadioGroup
            isDisabled={userAnswers[currentQuestionIndex]?.isSubmitted}
            value={userAnswers[currentQuestionIndex]?.value?.toString() || ""}
            onValueChange={handleOptionChange}
          >
            {(
              question as QuestionType & { options: OptionType[] }
            ).options?.map((option) => (
              <Radio
                key={option.id}
                className="max-w-full"
                value={option.id.toString()}
              >
                {option.description}
              </Radio>
            ))}
          </RadioGroup>
        ) : (
          <Input
            ref={inputRef}
            isDisabled={userAnswers[currentQuestionIndex]?.isSubmitted}
            placeholder="Enter your answer"
            type="number"
            value={integerAnswer}
            onValueChange={handleIntegerAnswerChange}
          />
        )}
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
            isDisabled={
              userAnswers[currentQuestionIndex]?.value === null &&
              question.type === "mcq"
            }
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
              color={
                question.type === "mcq"
                  ? selectedOption?.is_correct
                    ? "success"
                    : "danger"
                  : checkIntegerAnswer(
                        userAnswers[currentQuestionIndex]?.value,
                        question.correctAnswer,
                      )
                    ? "success"
                    : "danger"
              }
              title={
                question.type === "mcq"
                  ? selectedOption?.is_correct
                    ? "Correct"
                    : "Incorrect"
                  : checkIntegerAnswer(
                        userAnswers[currentQuestionIndex]?.value,
                        question.correctAnswer,
                      )
                    ? "Correct"
                    : "Incorrect"
              }
              variant="solid"
            />
          </CardHeader>
        </Card>
      )}
    </Card>
  );
};

export default QuestionCard;

export type OptionType = {
  id: number;
  description: string;
  is_correct?: boolean;
};

export type QuestionType =
  | {
      id: number;
      type: "mcq";
      description: string;
      options: OptionType[];
      correctAnswer?: never;
    }
  | {
      id: number;
      type: "integer";
      description: string;
      correctAnswer: string;
      options?: never;
    };

export type QuizDataType = QuestionType[];

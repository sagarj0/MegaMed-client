export type QuizDataType = {
  questionId: string;
  choosedAnswer: string;
  correctAnswer: string;
};

export type UpdateScoreProps = {
  quizId: string;
  score: number;
  answers: QuizDataType[];
  timeTaken: number;
};

export const UpdateScoreKey: Required<{ [K in keyof UpdateScoreProps]: K }> = {
  score: "score",
  quizId: "quizId",
  answers: "answers",
  timeTaken: "timeTaken",
};

export const QuizDataTypeKeys: Required<{ [K in keyof QuizDataType]: K }> = {
  questionId: "questionId",
  choosedAnswer: "choosedAnswer",
  correctAnswer: "correctAnswer",
};

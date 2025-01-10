export type QuizDataType = {
  questionId: string;
  answer: string;
  correctAnswer: string;
};

export type UpdateScoreProps = {
  quizId: string;
  score: number;
  questionData: QuizDataType[];
};

export const UpdateScoreKey: Required<{ [K in keyof UpdateScoreProps]: K }> = {
  score: "score",
  quizId: "quizId",
  questionData: "questionData",
};

export const QuizDataTypeKeys: Required<{ [K in keyof QuizDataType]: K }> = {
  questionId: "questionId",
  answer: "answer",
  correctAnswer: "correctAnswer",
};

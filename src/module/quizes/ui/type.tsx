export type QuizType = {
  questionId: string;
  answer: string;
  correctAnswer: string;
};

export type SaveQuizProps = {
  title: string;
  type?: "subject" | "mock_test" | "chapter" | "unit" | "custom";
  subject?: string;
  unit?: string;
  chapter?: string;
  score?: number;
  questionData: QuizType[];
};

export const SaveQuizKeys: Required<{ [K in keyof SaveQuizProps]: K }> = {
  title: "title",
  type: "type",
  subject: "subject",
  unit: "unit",
  chapter: "chapter",
  score: "score",
  questionData: "questionData",
};

export const QuizTypeKeys: Required<{ [K in keyof QuizType]: K }> = {
  questionId: "questionId",
  answer: "answer",
  correctAnswer: "correctAnswer",
};

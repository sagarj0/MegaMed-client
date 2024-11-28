export type Question = {
  subject: string;
  unit: string;
  chapter?: string;
  questionNo?: number;
  question: string;
  qImage?: string | null;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  aImage?: string | null;
  bImage?: string | null;
  cImage?: string | null;
  dImage?: string | null;
  correctAnswer: string;
  explanation?: string;
  eImage?: string | null;
  tag?: string;

  createdAt?: string;
  updatedAt?: string;
};

export type PostQuestionRequest = Question;

export type PostQuestionResponse = {
  data: {
    data: Question & { id: string };
    message: string;
  };
};

export type Question = {
  subject: string;
  unit: string;
  chapter?: string;
  question: string;
  qImage?: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  aImage?: string;
  bImage?: string;
  cImage?: string;
  dImage?: string;
  correctAnswer: string;
  explanation?: string;
  eImage?: string;
  tag?: string;
};

export type PostQuestionRequest = Question;

export type PostQuestionResponse = {
  data: {
    data: Question & { id: string };
    message: string;
  };
};

export type AddQuestionsProps = {
  subjectData: string[];
  questionNo?: number;
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

export const AddQuestionKeys: Required<{ [k in keyof AddQuestionsProps]: k }> = {
  subjectData: "subjectData",
  questionNo: "questionNo",
  question: "question",
  qImage: "qImage",
  optionA: "optionA",
  optionB: "optionB",
  optionC: "optionC",
  optionD: "optionD",
  aImage: "aImage",
  bImage: "bImage",
  cImage: "cImage",
  dImage: "dImage",
  correctAnswer: "correctAnswer",
  explanation: "explanation",
  eImage: "eImage",
  tag: "tag",
};

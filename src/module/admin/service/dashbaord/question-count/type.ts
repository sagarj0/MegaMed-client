export type QuestionCount = {
  totalQuestionCount: number;
  subjectWiseCount: { subject: string; count: number };
};

export type TotalQuestionsResponse = {
  data: {
    data: QuestionCount;
    message: string;
  };
};

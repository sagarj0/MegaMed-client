export type SubjectWiseCount = {
  subject: string;
  count: number;
};

export type TotalQuestions = {
  totalQuestionCount: number;
  subjectWiseCounts: SubjectWiseCount[];
};

export type QuestionMonthlyStat = {
  month: string;
  question: number;
};

export type AdminDashboardData = {
  totalQuestions: TotalQuestions;
  questionMonthlyStat: QuestionMonthlyStat[];
};

export type DashboardResponse = {
  data: {
    data: AdminDashboardData;
    message: string;
  };
};

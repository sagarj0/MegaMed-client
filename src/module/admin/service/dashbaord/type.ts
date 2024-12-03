export type DashboardData = {
  questionCount: {
    totalQuestionCount: number;
    subjectWiseCounts: { subject: string; count: number }[];
  };
  studentCount: number;
  mentorCount: number;
  adminCount: number;
};

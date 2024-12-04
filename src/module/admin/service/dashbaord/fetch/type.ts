export type RoleWiseCount = {
  role: string;
  count: number;
};

export type TotalUsers = {
  totalUserCount: number;
  roleWiseCounts: RoleWiseCount[];
};

export type SubjectWiseCount = {
  subject: string;
  count: number;
};

export type TotalQuestions = {
  totalQuestionCount: number;
  subjectWiseCounts: SubjectWiseCount[];
};

export type UserMonthlyStat = {
  month: string;
  user: number;
};

export type AdminDashboardData = {
  totalUsers: TotalUsers;
  totalQuestions: TotalQuestions;
  userMonthlyStat: UserMonthlyStat[];
};

export type DashboardResponse = {
  data: {
    data: AdminDashboardData;
    message: string;
  };
};

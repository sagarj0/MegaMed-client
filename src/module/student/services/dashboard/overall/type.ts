export type LastQuizData = {
  type: string;
  value: number;
};

export type TopPerformer = {
  username: string;
  totalScore: string;
  totalQuizzes: string;
};

export type PerformanceTrend = {
  month: string;
  student: string;
  mark: number;
};

export type Progress = {
  progressChangePercentage: number;
  overallPerformance: number;
};

export type DashboardData = {
  totalQuizzes: number;
  progress: Progress;
  lastQuizData: LastQuizData[];
  topFivePerformers: TopPerformer[];
  performanceTrend: PerformanceTrend[];
};

export type DashboardResponse = {
  data: { data: DashboardData; message: string };
};

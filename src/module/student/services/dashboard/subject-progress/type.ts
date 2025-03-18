export type PerformanceItem = {
  item: string;
  count: number;
  percent: number;
};

export type SubjectPerformance = {
  subject: string;
  count: number;
  performance: PerformanceItem[];
};

export type SubjectPerformanceResponse = {
  data: {
    data: SubjectPerformance[];
    message: string;
  };
};

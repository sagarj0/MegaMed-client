import { SaveQuizResponse } from "@/module/admin/service/quizes/add/type";

export type ScoresType = {
  rank: number;
  userName: string;
  userId: string;
  score: number;
  timeTaken: number;
};

export type ViewQuizReport = SaveQuizResponse & {
  scores: ScoresType[];
};

export type ViewQuizReportRequest = {
  quizId: string;
};

export type ViewQuizReportResponse = {
  data: {
    data: ViewQuizReport;
    message: string;
  };
};

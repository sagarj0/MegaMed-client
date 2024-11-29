import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { QuizEndpoints } from "../../util/endpoint";

export type DetailedQuiz = DetailedQuestion[];

export type FetchQuizReq = {
  pageSize?: number;
  current?: number;
  type: keyof typeof QuizEndpoints;
  value?: string;
};

export type FetchQuizRes = {
  data: {
    data: DetailedQuiz;
    pagination: { pageSize: number; current: number; total: number };
    message: string;
  };
};

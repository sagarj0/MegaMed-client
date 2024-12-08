import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { SaveQuizProps } from "@/module/admin/ui/quizes/add/type";

export type DetailedQuiz = DetailedQuestion[];

export type MockDetailedQuiz = {
  subject: string;
  questions: DetailedQuestion[];
};

export type GenerateQuizReq = {
  pageSize?: number;
  current?: number;
  type: SaveQuizProps["type"];
  value?: string;
};

export type GenerateQuizRes = {
  data: {
    data: DetailedQuiz;
    pagination: { pageSize: number; current: number; total: number };
    message: string;
  };
};

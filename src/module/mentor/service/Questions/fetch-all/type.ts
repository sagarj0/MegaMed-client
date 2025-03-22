import { DetailedQuestion } from "../fetch/type";

export type subject = "physics" | "chemistry" | "zoology" | "botany" | "MAT";

export type FetchAllQuestionRequest = Partial<DetailedQuestion> & {
  subject?: subject;
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
  me?: boolean;
};

export type GetAllQuestionRequest = { query: URLSearchParams };

export type FetchAllQuestionResponse = {
  data: {
    data: DetailedQuestion;
    pagination: { total: number; current: number; pageSize: number };
    message: string;
  };
};

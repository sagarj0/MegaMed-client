import { DetailedMentor } from "../fetch/type";

export type FetchAllMentorReq = {
  [key in keyof Partial<DetailedMentor>]: any;
} & {
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type GetAllMentorRequest = { query: URLSearchParams };

export type FetchAllMentorResponse = {
  data: {
    data: DetailedMentor;
    message: string;
  };
};

import { DetailedStudent } from "../fetch/type";

export type FetchAllStudentReq = {
  [key in keyof Partial<DetailedStudent>]: any;
} & {
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type GetAllStudentRequest = { query: URLSearchParams };

export type FetchAllStudentResponse = {
  data: {
    data: DetailedStudent;
    message: string;
  };
};

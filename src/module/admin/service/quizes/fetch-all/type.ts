import { SaveQuizResponse } from "../add/type";

export type FetchAllQuizRequest = Partial<SaveQuizResponse> & {
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type GetAllQuizRequest = { query: URLSearchParams };

export type FetchAllQuizResponse = {
  data: {
    data: SaveQuizResponse[];
    pagination: { total: number; current: number; pageSize: number };
    message: string;
  };
};

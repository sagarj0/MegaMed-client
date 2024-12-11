import { DetailedUser } from "../fetch/type";

export type FetchAllUserReq = Partial<DetailedUser> & {
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type GetAllUserRequest = { query: URLSearchParams };

export type FetchAllUserResponse = {
  data: {
    data: DetailedUser[];
    pagination: { pageSize: number; current: number; total: number };
    message: string;
  };
};

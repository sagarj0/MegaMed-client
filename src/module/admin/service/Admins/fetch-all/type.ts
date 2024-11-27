import { DetailedAdmin } from "../fetch/type";

export type FetchAllAdminReq = {
  [key in keyof Partial<DetailedAdmin>]: any;
} & {
  search?: string;
  current?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: "ASC" | "DESC";
};

export type GetAllAdminRequest = { query: URLSearchParams };

export type FetchAllAdminResponse = {
  data: {
    data: DetailedAdmin;
    message: string;
  };
};

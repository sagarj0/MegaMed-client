import { Admin } from "../add/type";

export type DetailedAdmin = Admin;

export type FetchAdminReq = {
  id: string;
};

export type FetchAdminRes = {
  data: {
    data: DetailedAdmin;
    message: string;
  };
};

import { User } from "@/module/auth/service/login/type";

export type DetailedUser = User;

export type FetchUserReq = {
  id: string;
};

export type FetchUserRes = {
  data: {
    data: DetailedUser;
    message: string;
  };
};

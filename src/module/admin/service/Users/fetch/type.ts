import { User } from "@/module/auth/service/login/type";
import { TotalQuestions } from "../../dashbaord/fetch/type";

export type DetailedUser = User;

export type FetchUserReq = {
  id: string;
};

export type FetchUserData = {
  user: DetailedUser;
  totalQuestions?: TotalQuestions;
};

export type FetchUserRes = {
  data: {
    data: FetchUserData;
    message: string;
  };
};

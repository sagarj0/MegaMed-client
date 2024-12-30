import { User } from "@/module/auth/service/login/type";
import { QuestionChartDataType, TotalQuestions } from "../../dashbaord/fetch/type";

export type DetailedUser = User;

export type FetchUserReq = {
  id: string;
};

export type FetchUserData = {
  user: DetailedUser;
  totalQuestions?: TotalQuestions;
  questionChartData: QuestionChartDataType[];
};

export type FetchUserRes = {
  data: {
    data: FetchUserData;
    message: string;
  };
};

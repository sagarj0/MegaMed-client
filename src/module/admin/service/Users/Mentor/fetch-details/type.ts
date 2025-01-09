import { QuestionChartDataType, TotalQuestions } from "../../../dashbaord/fetch/type";

export type FetchMentorDetailsReq = {
  id: string;
  timeValue: "thisWeek" | "thisMonth" | "allTime";
};

export type FetchMentorDetails = {
  totalQuestions?: TotalQuestions;
  questionChartData: QuestionChartDataType[];
};

export type FetchMentorDetailsRes = {
  data: {
    data: FetchMentorDetails;
    message: string;
  };
};

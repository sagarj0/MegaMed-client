import { ViewQuizReportEndpoint } from "../util/endpoint";
import { api } from "@/util/apis";
import { ViewQuizReportRequest, ViewQuizReportResponse } from "./type";

export const getQuizReport = (data: ViewQuizReportRequest): Promise<ViewQuizReportResponse> => {
  return api.get(ViewQuizReportEndpoint.viewQuizReport + data.quizId);
};

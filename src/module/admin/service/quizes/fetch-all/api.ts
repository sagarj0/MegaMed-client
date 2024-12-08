import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { GetAllQuizRequest, FetchAllQuizResponse } from "./type";

export const fetchQuiz = (data: GetAllQuizRequest): Promise<FetchAllQuizResponse> => {
  return api.get(AdminEndpoints.listAllQuiz + "?" + data.query);
};

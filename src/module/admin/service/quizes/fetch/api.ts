import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchQuizRequest, FetchQuizResponse } from "./type";

export const fetchQuiz = (data: FetchQuizRequest): Promise<FetchQuizResponse> => {
  return api.get(AdminEndpoints.getQuiz.byId + data.id);
};

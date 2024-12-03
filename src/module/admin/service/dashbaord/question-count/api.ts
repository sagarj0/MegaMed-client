import { api } from "@/util/apis";
import { TotalQuestionsResponse } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const getQuestionCount = (): Promise<TotalQuestionsResponse> => {
  return api.get(AdminEndpoints.countQuestion);
};

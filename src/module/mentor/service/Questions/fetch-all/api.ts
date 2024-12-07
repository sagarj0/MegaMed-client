import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { GetAllQuestionRequest, FetchAllQuestionResponse } from "./type";

export const fetchQuestion = (data: GetAllQuestionRequest): Promise<FetchAllQuestionResponse> => {
  return api.get(AdminEndpoints.manageQuestion + "?" + data.query);
};

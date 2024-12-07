import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchQuestionRequest, FetchQuestionResponse } from "./type";

export const fetchQuestion = (data: FetchQuestionRequest): Promise<FetchQuestionResponse> => {
  return api.get(AdminEndpoints.manageQuestion + data.id);
};

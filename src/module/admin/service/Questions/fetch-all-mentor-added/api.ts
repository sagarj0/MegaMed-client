import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAllQuestionResponse, GetAllQuestionRequest } from "../fetch-all/type";

export const getAllMentorAdded = (data: GetAllQuestionRequest): Promise<FetchAllQuestionResponse> => {
  return api.get(AdminEndpoints.manageQuestion + "?" + data.query);
};

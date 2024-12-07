import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PatchQuestionRequest, PatchQuestionResponse } from "./type";

export const patchQuestion = (data: PatchQuestionRequest): Promise<PatchQuestionResponse> => {
  return api.patch(AdminEndpoints.manageQuestion + data.id, data);
};

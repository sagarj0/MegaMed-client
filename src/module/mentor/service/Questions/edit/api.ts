import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PatchQuestionRequest, PatchQuestionResponse } from "./type";

export const patchQuestion = (data: PatchQuestionRequest, id: string): Promise<PatchQuestionResponse> => {
  return api.patch(AdminEndpoints.manageQuestion + id, data);
};

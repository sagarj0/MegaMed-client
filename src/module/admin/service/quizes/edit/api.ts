import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PatchQuizRequest, PatchQuizResponse } from "./type";

export const patchQuiz = (data: PatchQuizRequest, id: string): Promise<PatchQuizResponse> => {
  return api.patch(AdminEndpoints.update + id, data);
};

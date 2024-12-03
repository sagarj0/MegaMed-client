import { api } from "@/util/apis";
import { PatchMentorReq, PatchMentorRes } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const patchMentor = (data: PatchMentorReq): Promise<PatchMentorRes> => {
  return api.patch(AdminEndpoints.manageQuestion + "?" + `MentorId=${data.userId}`, data);
};

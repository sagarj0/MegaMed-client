import { api } from "@/util/apis";
import { PatchStudentReq, PatchStudentRes } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const patchStudent = (data: PatchStudentReq): Promise<PatchStudentRes> => {
  return api.patch(AdminEndpoints.manageQuestion + "?" + `StudentId=${data.userId}`, data);
};

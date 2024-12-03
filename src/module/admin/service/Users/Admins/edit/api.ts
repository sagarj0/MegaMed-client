import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { PatchAdminReq, PatchAdminRes } from "./type";

export const patchQuestion = (data: PatchAdminReq): Promise<PatchAdminRes> => {
  return api.patch(AdminEndpoints.manageQuestion + "?" + `adminId=${data.userId}`, data);
};

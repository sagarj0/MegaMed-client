import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAdminReq, FetchAdminRes } from "./type";

export const fetchAdmin = (data: FetchAdminReq): Promise<FetchAdminRes> => {
  return api.get(AdminEndpoints.manageQuestion + data.id);
};

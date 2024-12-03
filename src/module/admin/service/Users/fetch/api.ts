import { AdminEndpoints } from "@/module/admin/util/endpoint";

import { api } from "@/util/apis";
import { FetchUserReq, FetchUserRes } from "./type";

export const fetchUser = (data: FetchUserReq): Promise<FetchUserRes> => {
  return api.get(AdminEndpoints.user + data.id);
};

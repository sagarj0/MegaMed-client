import { AdminEndpoints } from "@/module/admin/util/endpoint";

import { api } from "@/util/apis";
import { FetchMentorReq, FetchMentorRes } from "./type";

export const fetchMentor = (data: FetchMentorReq): Promise<FetchMentorRes> => {
  return api.get(AdminEndpoints.user + data.id);
};

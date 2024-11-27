import { AdminEndpoints } from "@/module/admin/util/endpoint";

import { api } from "@/util/apis";
import { FetchStudentReq, FetchStudentRes } from "./type";

export const fetchStudent = (data: FetchStudentReq): Promise<FetchStudentRes> => {
  return api.get(AdminEndpoints.user + data.id);
};

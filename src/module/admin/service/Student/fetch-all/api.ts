import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAllStudentResponse, GetAllStudentRequest } from "./type";

export const fetchStudent = (data: GetAllStudentRequest): Promise<FetchAllStudentResponse> => {
  return api.get(AdminEndpoints.user + "?" + data.query);
};

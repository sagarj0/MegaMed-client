import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchAllMentorResponse, GetAllMentorRequest } from "./type";

export const fetchMentor = (data: GetAllMentorRequest): Promise<FetchAllMentorResponse> => {
  return api.get(AdminEndpoints.user + "?" + data.query);
};

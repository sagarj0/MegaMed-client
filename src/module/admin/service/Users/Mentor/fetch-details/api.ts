import { AdminEndpoints } from "@/module/admin/util/endpoint";
import { api } from "@/util/apis";
import { FetchMentorDetailsReq, FetchMentorDetailsRes } from "./type";

export const getMentorDetails = (data: FetchMentorDetailsReq): Promise<FetchMentorDetailsRes> => {
  return api.get(AdminEndpoints.mentorDetails + data.id + `?timeFilter=${data.timeValue}`);
};

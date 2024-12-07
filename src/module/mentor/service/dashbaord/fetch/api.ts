import { api } from "@/util/apis";
import { DashboardResponse } from "./type";
import { MentorEndpoints } from "@/module/mentor/util/endpoint";

export const getDashboardData = (): Promise<DashboardResponse> => {
  return api.get(MentorEndpoints.dashboard);
};

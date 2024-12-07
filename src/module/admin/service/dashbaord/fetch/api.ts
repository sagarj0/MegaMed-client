import { api } from "@/util/apis";
import { DashboardResponse } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const getDashboardData = (): Promise<DashboardResponse> => {
  return api.get(AdminEndpoints.dashboard);
};

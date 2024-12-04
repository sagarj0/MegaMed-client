import { api } from "@/util/apis";
import { DashboardResponse } from "./type";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const getQuestionCount = (): Promise<DashboardResponse> => {
  return api.get(AdminEndpoints.dashboard);
};

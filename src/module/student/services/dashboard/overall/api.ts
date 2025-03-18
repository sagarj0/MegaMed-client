import { api } from "@/util/apis";
import { DashboardResponse } from "./type";
import { StudentEndpoints } from "@/module/student/util/endpoints";

export const getOverAllPerformance = async (): Promise<DashboardResponse> => {
  return api.get(StudentEndpoints.dashboard.overall);
};

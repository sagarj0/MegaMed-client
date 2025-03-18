import { api } from "@/util/apis";
import { SubjectPerformanceResponse } from "./type";
import { StudentEndpoints } from "@/module/student/util/endpoints";

export const getSubjectProgress = async (): Promise<SubjectPerformanceResponse> => {
  return api.get(StudentEndpoints.dashboard.subjectProgress);
};

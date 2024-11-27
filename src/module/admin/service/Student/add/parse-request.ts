//modify the subject data to subject, chapter and unit

import { AddStudentProps } from "@/module/admin/ui/Students/add/type";
import { PostStudentRequest } from "./type";

export const parseStudentReq = (data: AddStudentProps): PostStudentRequest => {
  return data;
};

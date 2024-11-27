import { DetailedStudent } from "@/module/admin/service/Student/fetch/type";
import { AddStudentProps } from "./type";

export const mapToForm = (data: DetailedStudent): AddStudentProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

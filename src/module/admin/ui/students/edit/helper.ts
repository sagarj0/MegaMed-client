import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { AddStudentProps } from "./type";

export const mapToForm = (data: DetailedUser): AddStudentProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

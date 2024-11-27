import { AddStudentProps } from "@/module/admin/ui/Students/add/type";
import { User } from "@/module/auth/service/login/type";

export type Student = User;

export type PostStudentRequest = AddStudentProps;

export type PostStudentResponse = {
  data: {
    data: Student;
    message: string;
  };
};

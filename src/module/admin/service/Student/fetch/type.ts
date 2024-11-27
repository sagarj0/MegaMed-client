import { Student } from "../add/type";

export type DetailedStudent = Student;

export type FetchStudentReq = {
  id: string;
};

export type FetchStudentRes = {
  data: {
    data: DetailedStudent;
    message: string;
  };
};

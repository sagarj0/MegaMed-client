import { DetailedMentor } from "@/module/admin/service/Mentor/fetch/type";
import { AddMentorProps } from "./type";

export const mapToForm = (data: DetailedMentor): AddMentorProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

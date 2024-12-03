import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { AddMentorProps } from "./type";

export const mapToForm = (data: DetailedUser): AddMentorProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

import { DetailedUser } from "@/module/admin/service/Users/fetch/type";
import { AddAdminProps } from "./type";

export const mapToForm = (data: DetailedUser): AddAdminProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

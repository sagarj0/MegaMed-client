import { DetailedAdmin } from "@/module/admin/service/Admins/fetch/type";
import { AddAdminProps } from "./type";

export const mapToForm = (data: DetailedAdmin): AddAdminProps => {
  return {
    name: data.name,
    email: data.email,
    userId: data.id,
  };
};

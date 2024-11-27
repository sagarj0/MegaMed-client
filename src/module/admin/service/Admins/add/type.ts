import { AddAdminProps } from "@/module/admin/ui/admins/add/type";
import { User } from "@/module/auth/service/login/type";

export type Admin = User;

export type PostAdminRequest = AddAdminProps;

export type PostAdminResponse = {
  data: {
    data: Admin;
    message: string;
  };
};

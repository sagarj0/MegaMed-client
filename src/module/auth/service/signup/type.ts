import { User, UserRole } from "../login/type";

export type SignupRequest = {
  name: string;
  email: string;
  password: string;
  role: UserRole;
};

export type SignupResponse = {
  data: {
    data?: User;
    token?: string;
    message?: string;
  };
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type UserRole = "admin" | "student" | "mentor";

export enum UserRoleEnum {
  ADMIN = "admin",
  STUDENT = "student",
  MENTOR = "mentor",
}

export type User = {
  id: string;
  googleId?: string;
  name: string;
  email: string;
  number?: string;
  // password?: string;
  photo?: string;
  role: UserRole;
  pictureUrl?: string;
  active: boolean;
  isPaidUser: boolean;
  isEmailVerified: boolean;
};

export type LoginResponse = {
  data: {
    data: User;
    token: string;
    message?: string;
  };
};

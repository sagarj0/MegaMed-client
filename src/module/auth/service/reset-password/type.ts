export type ResetPasswordRequest = {
  token: string;
  email: string;
  newPassword: string;
};

export type ResetPasswordResponse = {
  data: { message?: string };
};

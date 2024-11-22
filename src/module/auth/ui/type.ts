export type LoginFormProps = {
  email: string;
  password: string;
};

export const LoginFormKey: Required<{ [k in keyof LoginFormProps]: k }> = {
  email: "email",
  password: "password",
};

export type SignupFormProps = {
  name: string;
  email: string;
  password: string;
};

export const SignupFormKey: Required<{ [k in keyof SignupFormProps]: k }> = {
  name: "name",
  email: "email",
  password: "password",
};

export type ForgetPasswordFormProps = {
  email: string;
};

export const ForgetPasswordFormKey: Required<{ [k in keyof ForgetPasswordFormProps]: k }> = {
  email: "email",
};

export type ResetPasswordFormProps = {
  email: string;
  newPassword: string;
  token: string;
};

export const ResetFormKey: Required<{ [k in keyof ResetPasswordFormProps]: k }> = {
  email: "email",
  newPassword: "newPassword",
  token: "token",
};

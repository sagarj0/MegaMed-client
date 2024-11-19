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

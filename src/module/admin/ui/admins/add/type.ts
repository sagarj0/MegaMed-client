export type AddAdminProps = {
  userId?: string;
  name?: string;
  email?: string;
  password?: string;
};

export const AddAdminKeys: Record<keyof AddAdminProps, keyof AddAdminProps> = {
  userId: "userId",
  name: "name",
  email: "email",
  password: "password",
};

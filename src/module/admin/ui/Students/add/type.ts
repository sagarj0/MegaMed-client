export type AddStudentProps = {
  userId?: string;
  name?: string;
  email?: string;
  password?: string;
};

export const AddStudentKeys: Record<keyof AddStudentProps, keyof AddStudentProps> = {
  userId: "userId",
  name: "name",
  email: "email",
  password: "password",
};

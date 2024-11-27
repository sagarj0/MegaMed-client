export type AddMentorProps = {
  userId?: string;
  name?: string;
  email?: string;
  password?: string;
};

export const AddMentorKeys: Record<keyof AddMentorProps, keyof AddMentorProps> = {
  userId: "userId",
  name: "name",
  email: "email",
  password: "password",
};

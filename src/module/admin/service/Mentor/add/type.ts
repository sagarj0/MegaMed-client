import { AddMentorProps } from "@/module/admin/ui/Mentors/add/type";
import { User } from "@/module/auth/service/login/type";

export type Mentor = User;

export type PostMentorRequest = AddMentorProps;

export type PostMentorResponse = {
  data: {
    data: Mentor;
    message: string;
  };
};

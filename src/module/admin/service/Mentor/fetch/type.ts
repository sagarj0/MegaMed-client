import { Mentor } from "../add/type";

export type DetailedMentor = Mentor;

export type FetchMentorReq = {
  id: string;
};

export type FetchMentorRes = {
  data: {
    data: DetailedMentor;
    message: string;
  };
};

import { DetailedQuestion } from "../../Questions/fetch/type";
import { SaveQuizResponse } from "../add/type";

export type DetailedQuiz = SaveQuizResponse & {
  questions: DetailedQuestion[];
};

export type FetchQuizRequest = {
  id: string;
};

export type FetchQuizResponse = {
  data: {
    data: DetailedQuiz;
    message: string;
  };
};

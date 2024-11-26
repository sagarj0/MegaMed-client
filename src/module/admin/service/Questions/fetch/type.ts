import { Question } from "../add/type";

export type DetailedQuestion = Question & { id: string };

export type FetchQuestionRequest = {
  id: string;
};

export type FetchQuestionResponse = {
  data: {
    data: DetailedQuestion;
    message: string;
  };
};

import { DetailedQuestion } from "../fetch/type";

export type FetchAllQuestionRequest = {};

export type GetAllQuestionRequest = { query: URLSearchParams };

export type FetchAllQuestionResponse = {
  data: {
    data: DetailedQuestion;
    message: string;
  };
};

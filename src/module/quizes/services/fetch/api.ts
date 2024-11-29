import { api } from "@/util/apis";
import { FetchQuizReq, FetchQuizRes } from "./type";
import { QuizEndpoints } from "../../util/endpoint";
import { parseRequest } from "@/helper/convert-to-urlquery";

export const fetchQuiz = (data: FetchQuizReq): Promise<FetchQuizRes> => {
  const { type, value, ...rest } = data;
  const newValue = value ? value : "";
  const { query } = parseRequest(rest);
  return api.get(QuizEndpoints[data.type] + newValue + "?" + query);
};

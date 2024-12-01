import { SaveQuizProps } from "../../ui/type";
import { SaveQuizReq } from "./type";

export const parseRequest = (data: SaveQuizProps): SaveQuizReq => {
  const { questionData, ...rest } = data;
  const questionIds = questionData.map((item) => item.questionId);

  return {
    questionIds,
    ...rest,
  } as SaveQuizReq;
};

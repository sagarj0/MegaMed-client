import { SaveQuizProps } from "../../ui/type";
import { SaveQuizReq } from "./type";

export const parseRequest = (data: SaveQuizProps): SaveQuizReq => {
  const { questionData } = data;
  const questionIds = questionData.map((item) => item.questionId);

  return {
    title: data.title || "",
    type: data.type || "",
    subject: data.subject || "",
    score: data.score || 0,
    questionIds,
  };
};

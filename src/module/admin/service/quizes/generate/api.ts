import { api } from "@/util/apis";
import { GenerateQuizReq, GenerateQuizRes } from "./type";
import { parseRequest } from "@/helper/convert-to-urlquery";
import { AdminEndpoints } from "@/module/admin/util/endpoint";

export const generateQuiz = (data: GenerateQuizReq): Promise<GenerateQuizRes> => {
  const { type, value, ...rest } = data;
  const newValue = value ? value : "";
  const { query } = parseRequest(rest);

  // @ts-ignore
  return api.get(AdminEndpoints.getQuiz[type] + newValue + "?" + query);
};

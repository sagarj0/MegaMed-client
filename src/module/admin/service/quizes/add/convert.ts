import { SaveQuizProps } from "@/module/admin/ui/quizes/add/type";
import { PostQuizRequest } from "./type";

export const parseRequest = (data: SaveQuizProps): PostQuizRequest => {
  return {
    ...data,
  } as PostQuizRequest;
};

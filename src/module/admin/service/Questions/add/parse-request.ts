import { AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";
import { PostQuestionRequest } from "./type";

//modify the subject data to subject, chapter and unit

export const parseQuestionRequest = (data: AddQuestionsProps): PostQuestionRequest => {
  const { subjectData, ...rest } = data;
  const [subject, chapter, unit] = subjectData;

  return { subject: subject.toLowerCase(), chapter, unit, ...rest };
};

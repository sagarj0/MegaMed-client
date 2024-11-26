import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { AddQuestionsProps } from "./type";

export const mapToForm = (data: DetailedQuestion): AddQuestionsProps => {
  const { subject, chapter, unit, ...rest } = data;
  const subjectData = [subject, chapter, unit].filter(Boolean) as string[];
  return { subjectData, ...rest };
};

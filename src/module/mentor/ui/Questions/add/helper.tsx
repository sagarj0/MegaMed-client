import { DetailedQuestion } from "@/module/admin/service/Questions/fetch/type";
import { AddQuestionsProps } from "./type";

export const mapToForm = (data: DetailedQuestion): AddQuestionsProps => {
  const { subject, chapter, unit, qImage, aImage, bImage, cImage, dImage, eImage, ...rest } = data;
  const subjectData = [subject, chapter, unit].filter(Boolean) as string[];

  return { subjectData, ...rest };
};

export const resetFields: (keyof AddQuestionsProps)[] = [
  "question",
  "optionA",
  "optionB",
  "optionC",
  "optionD",
  "correctAnswer",
  "explanation",
  "qImage",
  "aImage",
  "bImage",
  "cImage",
  "dImage",
  "eImage",
];

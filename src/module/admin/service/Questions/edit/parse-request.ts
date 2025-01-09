import { getAllModifiedProperty } from "@/helper/get-modified-property";
import { AddQuestionKeys, AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";
import { PatchQuestionRequest } from "./type";

interface Props {
  oldData: AddQuestionsProps;
  newData: AddQuestionsProps;
}

export const parseEditRequest = ({ oldData, newData }: Props): PatchQuestionRequest => {
  const diffData = getAllModifiedProperty(oldData, newData, AddQuestionKeys);

  const updatedData = Object.fromEntries(Object.entries(diffData).filter(([_, value]) => value !== undefined));

  //modify the subject data to subject, chapter and unit
  const { subjectData, qImage, aImage, bImage, cImage, dImage, eImage, ...rest } = updatedData as Partial<AddQuestionsProps>;
  const [newSubject, chapter, unit] = subjectData || [];
  const subject = newSubject?.toLowerCase();

  return { subject, chapter, unit, ...rest };
};

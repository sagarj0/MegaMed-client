import { getAllModifiedProperty } from "@/helper/get-modified-property";
import { PatchQuizRequest } from "./type";
import { SaveQuizKeys } from "@/module/admin/ui/quizes/add/type";
import { DetailedQuiz } from "../fetch/type";

interface Props {
  oldData: DetailedQuiz;
  newData: DetailedQuiz;
}

export const parseEditRequest = ({ oldData, newData }: Props): PatchQuizRequest => {
  const diffData = getAllModifiedProperty(oldData, newData, SaveQuizKeys);

  const updatedData = Object.fromEntries(Object.entries(diffData).filter(([_, value]) => value !== undefined));

  return updatedData as PatchQuizRequest;
};

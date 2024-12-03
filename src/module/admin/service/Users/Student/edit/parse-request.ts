import { getAllModifiedProperty } from "@/helper/get-modified-property";
import { PatchStudentReq } from "./type";
import { AddStudentKeys, AddStudentProps } from "@/module/admin/ui/Students/edit/type";

interface Props {
  oldData: AddStudentProps;
  newData: AddStudentProps;
}

export const parseEditRequest = ({ oldData, newData }: Props): PatchStudentReq => {
  const diffData = getAllModifiedProperty(oldData, newData, AddStudentKeys);

  const updatedData = Object.fromEntries(Object.entries(diffData).filter(([_, value]) => value !== undefined));

  //modify the subject data to subject, chapter and unit

  return { ...updatedData };
};

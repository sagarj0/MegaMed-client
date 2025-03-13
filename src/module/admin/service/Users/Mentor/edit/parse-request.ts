import { getAllModifiedProperty } from "@/helper/get-modified-property";
import { PatchMentorReq } from "./type";
import { AddMentorKeys, AddMentorProps } from "@/module/admin/ui/mentors/add/type";

interface Props {
  oldData: AddMentorProps;
  newData: AddMentorProps;
}

export const parseEditRequest = ({ oldData, newData }: Props): PatchMentorReq => {
  const diffData = getAllModifiedProperty(oldData, newData, AddMentorKeys);

  const updatedData = Object.fromEntries(Object.entries(diffData).filter(([_, value]) => value !== undefined));

  //modify the subject data to subject, chapter and unit

  return { ...updatedData };
};

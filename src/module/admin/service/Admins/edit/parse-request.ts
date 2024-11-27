import { getAllModifiedProperty } from "@/helper/get-modified-property";
import { PatchAdminReq } from "./type";
import { AddAdminProps, AddAdminKeys } from "@/module/admin/ui/admins/add/type";

interface Props {
  oldData: AddAdminProps;
  newData: AddAdminProps;
}

export const parseEditRequest = ({ oldData, newData }: Props): PatchAdminReq => {
  const diffData = getAllModifiedProperty(oldData, newData, AddAdminKeys);

  const updatedData = Object.fromEntries(Object.entries(diffData).filter(([_, value]) => value !== undefined));

  //modify the subject data to subject, chapter and unit

  return { ...updatedData };
};

import { AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";
import { PostQuestionRequest } from "./type";
import { uploadImages } from "./upload-image";

//modify the subject data to subject, chapter and unit
export const uploadAndParse = async (data: AddQuestionsProps): Promise<PostQuestionRequest> => {
  const { subjectData, qImage, aImage, bImage, cImage, dImage, eImage, ...rest } = data;
  const [subject, unit, chapter] = subjectData;

  const images = await uploadImages({ qImage, aImage, bImage, cImage, dImage, eImage });

  return { subject: subject.toLowerCase(), chapter, unit, ...rest, ...images };
};

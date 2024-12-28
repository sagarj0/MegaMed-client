import { AddQuestionsProps } from "@/module/admin/ui/Questions/add/type";
import { PostQuestionRequest } from "./type";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseStorage } from "@/util/firebase";
import { v4 } from "uuid";

type UploadImage = Pick<AddQuestionsProps, "qImage" | "aImage" | "bImage" | "cImage" | "dImage" | "eImage">;

//TODO: Move it to UploadImage component
export const uploadImages = async (data: UploadImage): Promise<Partial<PostQuestionRequest>> => {
  const { qImage, aImage, bImage, cImage, dImage, eImage } = data;

  // if no image is provided, return empty object
  if (!qImage && !aImage && !bImage && !cImage && !dImage && !eImage) return {};

  const images = { qImage, aImage, bImage, cImage, dImage, eImage };
  const uploadPromises = Object.entries(images)
    .filter(([_, image]) => image)
    .map(async ([key, image]) => {
      if (image) {
        const storageRef = ref(firebaseStorage, `Questions/${v4()}`);
        await uploadBytes(storageRef, image);
        const downloadURL = await getDownloadURL(storageRef);
        return { key, url: downloadURL };
      }
      return { key, url: undefined };
    });

  const results = await Promise.all(uploadPromises);

  const response: Partial<PostQuestionRequest> = results.reduce((acc, { key, url }) => {
    if (url) acc[key as keyof UploadImage] = url;
    return acc;
  }, {} as Partial<PostQuestionRequest>);

  return response;
};

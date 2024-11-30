import { AdminUrls } from "@/module/admin/util/urls";
import { AuthUrl } from "@/module/auth/util/url";
import { HomeUrl } from "@/module/home/util/url";
import { QuizUrls } from "@/module/quizes/util/url";

export const AllUrls = {
  ...HomeUrl,
  ...AuthUrl,
  ...AdminUrls,
  ...QuizUrls,
};

import { AdminUrls } from "@/module/admin/util/urls";
import { AuthUrl } from "@/module/auth/util/url";
import { HomeUrl } from "@/module/home/util/url";
import { MentorUrls } from "@/module/mentor/util/urls";
import { StudentUrls } from "@/module/student/util/urls";

export const AllUrls = {
  ...HomeUrl,
  ...AuthUrl,
  ...AdminUrls,
  ...MentorUrls,
  ...StudentUrls,
};

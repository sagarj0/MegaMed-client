import { Route } from "react-router-dom";
import { MentorLayout } from "../ui";
import { MentorUrls } from "./urls";
import { ViewAllQuestion } from "../ui/Questions/view-all";
import { AddQuestions } from "../ui/Questions/add";
import { MentorDashboard } from "../ui/dashboard";
import { ProfileComponent } from "@/module/auth/ui/profile";

export const MentorRoutes = (
  <Route element={<MentorLayout />}>
    <Route path={MentorUrls.mentor} element={<MentorDashboard />} />
    <Route path={MentorUrls.mentorProfile} element={<ProfileComponent />} />

    <Route path={MentorUrls.mentorquestions.viewAll} element={<ViewAllQuestion />} />
    <Route path={MentorUrls.mentorquestions.add} element={<AddQuestions mode="New" />} />
    <Route path={MentorUrls.mentorquestions.edit + ":id"} element={<AddQuestions mode="Edit" />} />
  </Route>
);

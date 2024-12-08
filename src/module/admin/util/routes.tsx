import { Route } from "react-router-dom";
import { AdminLayout } from "../ui";
import { AdminUrls } from "./urls";
import { ViewAllQuestion } from "../ui/Questions/view-all";
import { ViewAllMentors } from "../ui/Mentors/view-all";
import { ViewAllAdmins } from "../ui/admins/view-all";
import { ViewAllStudents } from "../ui/Students/view-all";
import { AddQuestions } from "../ui/Questions/add";
import { AddAdmin } from "../ui/admins/add";
import { AdminDashboard } from "../ui/dashboard";
import { ProfileComponent } from "@/module/auth/ui/profile";
import { ViewAllQuiz } from "../ui/quizes/view-all";
import { AddQuiz } from "../ui/quizes/add";
import { ViewQuiz } from "../ui/quizes/view";

export const AdminRoutes = (
  <Route element={<AdminLayout />}>
    <Route path={AdminUrls.admin} element={<AdminDashboard />} />
    <Route path={AdminUrls.adminProfile} element={<ProfileComponent />} />

    <Route path={AdminUrls.adminAdmin.viewAll} element={<ViewAllAdmins />} />
    <Route path={AdminUrls.adminAdmin.add} element={<AddAdmin mode="New" />} />
    <Route path={AdminUrls.adminAdmin.edit + ":id"} element={<AddAdmin mode="Edit" />} />

    <Route path={AdminUrls.adminMentor.viewAll} element={<ViewAllMentors />} />
    <Route path={AdminUrls.adminMentor.add} element={<AddAdmin mode="New" />} />
    <Route path={AdminUrls.adminMentor.edit + ":id"} element={<AddAdmin mode="Edit" />} />

    <Route path={AdminUrls.adminStudent.add} element={<AddAdmin mode="New" />} />
    <Route path={AdminUrls.adminStudent.edit + ":id"} element={<AddAdmin mode="Edit" />} />
    <Route path={AdminUrls.adminStudent.viewAll} element={<ViewAllStudents />} />

    <Route path={AdminUrls.adminquestions.viewAll} element={<ViewAllQuestion />} />
    <Route path={AdminUrls.adminquestions.add} element={<AddQuestions mode="New" />} />
    <Route path={AdminUrls.adminquestions.edit + ":id"} element={<AddQuestions mode="Edit" />} />

    <Route path={AdminUrls.adminquizes.viewAll} element={<ViewAllQuiz />} />
    <Route path={AdminUrls.adminquizes.add} element={<AddQuiz mode="New" />} />
    <Route path={AdminUrls.adminquizes.view + ":id"} element={<ViewQuiz />} />
  </Route>
);

import { Route } from "react-router-dom";
import { AdminLayout } from "../ui";
import { AdminUrls } from "./urls";
import { ViewAllQuestion } from "../ui/Questions/view-all";
import { ViewAllMentors } from "../ui/Mentors/view-all";
import { ViewAllAdmins } from "../ui/admins/view-all";
import { ViewAllStudents } from "../ui/Students/view-all";
import { AddQuestions } from "../ui/Questions/add";

export const AdminRoutes = (
  <Route element={<AdminLayout />}>
    <Route path={AdminUrls.admin} element={<div>Admin Dashboard</div>} />
    <Route path={AdminUrls.adminAdmin.viewAll} element={<ViewAllAdmins />} />
    <Route path={AdminUrls.adminMentor.viewAll} element={<ViewAllMentors />} />
    <Route path={AdminUrls.adminStudent.viewAll} element={<ViewAllStudents />} />
    <Route path={AdminUrls.adminquestions.viewAll} element={<ViewAllQuestion />} />
    <Route path={AdminUrls.adminquestions.add} element={<AddQuestions mode="New" />} />
    <Route path={AdminUrls.adminquestions.edit + ":id"} element={<AddQuestions mode="Edit" />} />
  </Route>
);

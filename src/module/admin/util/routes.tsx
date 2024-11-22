import { Route } from "react-router-dom";
import { AdminLayout } from "../ui";
import { AdminUrls } from "./urls";
import { ViewAllQuestion } from "../ui/Questions/view-all";
import { ViewAllMentors } from "../ui/Mentors/view-all";
import { ViewAllAdmins } from "../ui/admins/view-all";
import { ViewAllStudents } from "../ui/Students/view-all";

export const AdminRoutes = (
  <Route element={<AdminLayout />}>
    <Route path={AdminUrls.admin} element={<div>Admin</div>} />
    <Route path={AdminUrls.adminAdmin} element={<ViewAllAdmins />} />
    <Route path={AdminUrls.adminMentor} element={<ViewAllMentors />} />
    <Route path={AdminUrls.adminStudent} element={<ViewAllStudents />} />
    <Route path={AdminUrls.adminquestions} element={<ViewAllQuestion />} />
  </Route>
);

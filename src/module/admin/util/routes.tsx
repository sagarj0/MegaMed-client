import { Route } from "react-router-dom";
import { AdminLayout } from "../ui";
import { AdminUrls } from "./urls";

export const AdminRoutes = (
  <Route element={<AdminLayout />}>
    <Route path={AdminUrls.admin} element={<div>Admin</div>} />
    <Route path={AdminUrls.adminAdmin} element={<div>Admin</div>} />
    <Route path={AdminUrls.adminMentor} element={<div>Mentor</div>} />
    <Route path={AdminUrls.adminStudent} element={<div>Student</div>} />
    <Route path={AdminUrls.adminquestions} element={<div>Questions</div>} />
  </Route>
);

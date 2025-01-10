import { Route } from "react-router-dom";
import { StudentLayout } from "../ui";
import { StudentUrls } from "./urls";
import { StudentDashboard } from "../ui/dashboard";
import { ProfileComponent } from "@/module/auth/ui/profile";

export const StudentRoutes = (
  <Route element={<StudentLayout />}>
    <Route path={StudentUrls.student} element={<StudentDashboard />} />
    <Route path={StudentUrls.studentProfile} element={<ProfileComponent />} />
  </Route>
);

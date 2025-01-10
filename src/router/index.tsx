import NotFound from "@/component/not-found";
import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route } from "react-router-dom";
import { AdminRoutes } from "@/module/admin/util/routes";
import { HomeRoutes } from "@/module/home/util/route";
import { AuthRoutes } from "@/module/auth/util/route";
import { MentorRoutes } from "@/module/mentor/util/routes";
import { StudentRoutes } from "@/module/student/util/routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {AuthRoutes}
      {HomeRoutes}
      {AdminRoutes}
      {MentorRoutes}
      {StudentRoutes}
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

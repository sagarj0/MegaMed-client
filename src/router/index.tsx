import NotFound from "@/component/not-found";
import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route } from "react-router-dom";
import { AdminRoutes } from "@/module/admin/util/routes";
import MainLayout from "@/util/ui/layout";
import { HomeRoutes } from "@/module/home/util/route";
import { AuthRoutes } from "@/module/auth/util/route";
import { QuizRoutes } from "@/module/quizes/util/route";
import { MentorRoutes } from "@/module/mentor/util/routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {AuthRoutes}
      <Route element={<MainLayout />}>
        {HomeRoutes}
        {QuizRoutes}
      </Route>
      {AdminRoutes}
      {MentorRoutes}
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

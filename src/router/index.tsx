import NotFound from "@/component/not-found";
import { createRoutesFromElements } from "react-router";
import { createBrowserRouter, Route } from "react-router-dom";
// import MainLayout from "@/util/ui/layout";
// import { HomeRoutes } from "@/module/home/route";
// import NotFound from "@/component/not-found";
// import { AuthRoutes } from "@/module/auth/util/route";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

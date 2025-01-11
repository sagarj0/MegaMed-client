import { Route } from "react-router-dom";
import { HomeUrl } from "./url";
import Home from "../ui";
import { AboutPage } from "../ui/about";
import { ContactPage } from "../ui/contact";
import { TestPage } from "../ui/test";
import MainLayout from "@/module/home/util/layout";

export const HomeRoutes = (
  <Route element={<MainLayout />}>
    <Route path={HomeUrl.home} element={<Home />} />
    <Route path={HomeUrl.about} element={<AboutPage />} />
    <Route path={HomeUrl.contact} element={<ContactPage />} />
    <Route path={HomeUrl.test} element={<TestPage />} />
  </Route>
);

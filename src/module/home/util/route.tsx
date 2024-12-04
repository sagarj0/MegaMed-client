import { Route } from "react-router-dom";
import { HomeUrl } from "./url";
import Home from "../ui";
import { AboutPage } from "../ui/about";
import { ContactPage } from "../ui/contact";

export const HomeRoutes = (
  <>
    <Route path={HomeUrl.home} element={<Home />} />
    <Route path={HomeUrl.about} element={<AboutPage />} />
    <Route path={HomeUrl.contact} element={<ContactPage />} />
  </>
);

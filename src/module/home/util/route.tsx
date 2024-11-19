import { Route } from "react-router-dom";
import { HomeUrl } from "./url";
import Home from "../ui";

export const HomeRoutes = (
  <>
    <Route path={HomeUrl.home} element={<Home />} />
  </>
);

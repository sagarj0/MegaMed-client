import { Route } from "react-router-dom";
import { AuthUrl } from "./url";
import { Login } from "../ui/login";
import { AuthLayout } from "./layout";
import { SuccessGoogleLogin } from "../ui/google-redirect";
import { Signup } from "../ui/signup";

export const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route path={AuthUrl.signUp} element={<Signup />} />
    <Route path={AuthUrl.login} element={<Login />} />
    <Route path={AuthUrl.googleSuccess} element={<SuccessGoogleLogin />} />
  </Route>
);

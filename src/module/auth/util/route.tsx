import { Route } from "react-router-dom";
import { AuthUrl } from "./url";
import { Login } from "../ui/login";
import { AuthLayout } from "./layout";
import { SuccessAuth } from "../ui/auth-success";
import { Signup } from "../ui/signup";
import { ForgetPassword } from "../ui/forget-password";
import { ResetPassword } from "../ui/reset-password";

export const AuthRoutes = (
  <Route element={<AuthLayout />}>
    <Route path={AuthUrl.signUp} element={<Signup />} />
    <Route path={AuthUrl.login} element={<Login />} />
    <Route path={AuthUrl.authSuccess} element={<SuccessAuth />} />
    <Route path={AuthUrl.forgotPassword} element={<ForgetPassword />} />
    <Route path={AuthUrl.resetPassword} element={<ResetPassword />} />
  </Route>
);

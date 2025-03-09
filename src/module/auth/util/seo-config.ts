import { SeoConfig } from "@/helper/hooks/useSeoConfig";
import { AuthUrl } from "./url";

export const seoConfig: Required<{ [key in keyof typeof AuthUrl]: SeoConfig[string] }> = {
  login: { title: "Login", description: "Login to your account" },
  signUp: { title: "Sign Up", description: "Sign up for a new account" },
  authSuccess: { title: "Success", description: "Successfully authenticated" },
  forgotPassword: { title: "Forgot Password", description: "Forgot your password? No worries, we got you covered" },
  resetPassword: { title: "Reset Password", description: "Reset your password" },
};

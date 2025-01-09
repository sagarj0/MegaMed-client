import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeAccessToken, changeUser } from "../service/repo/reducer";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "@/router/urls";
import { config } from "@/util/config";
import { UserRole } from "../service/login/type";
import { message } from "antd";

interface Props {
  checkToken?: boolean;
  checkIsPaid?: boolean;
  roleCheck?: UserRole[];
}

const useAuthHook = (props?: Props) => {
  const { checkToken = false, roleCheck, checkIsPaid } = props || {};

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken } = useAppSelector((root) => root.AuthRepo);

  const isUserLoggedIn = Boolean(accessToken && user?.id);

  const logout = () => {
    //make accessToken null and user empty and redirect to login page
    dispatch(changeAccessToken(null));
    dispatch(changeUser({}));
    navigate(AllUrls.login);
    message.success("Logged out successfully");
  };

  const checkAccessTokenValidation = () => {
    if (!accessToken) navigate(AllUrls.login);
    if (roleCheck && config.appMode === "PRODUCTION") {
      const isRoleMatched = roleCheck.includes(user?.role);
      if (!isRoleMatched) navigate(AllUrls.login);
    }
  };
  if (checkToken) checkAccessTokenValidation();

  const checkIsPaidUser = () => {
    if (user?.isPaidUser) return;
    navigate(AllUrls.home);
    message.error("This feature is only available to paid users");
  };
  if (checkIsPaid) checkIsPaidUser();

  return { logout, isUserLoggedIn, checkAccessTokenValidation, user, checkIsPaidUser };
};

export default useAuthHook;

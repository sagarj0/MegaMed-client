import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeAccessToken, changeUser } from "../service/repo/reducer";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "@/router/urls";
import { Avatar } from "antd";
import { config } from "@/util/config";
import { UserRole } from "../service/login/type";
import { message } from "antd";

interface Props {
  checkToken?: boolean;
  checkIsPaid?: boolean;
  roleCheck?: UserRole;
}

const useAuthHook = (props?: Props) => {
  const { checkToken = false, roleCheck, checkIsPaid } = props || {};

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user, accessToken } = useAppSelector((root) => root.AuthRepo);

  const isUserLoggedIn = Boolean(accessToken && user?.id);
  const src = user?.pictureUrl;

  const UserAvatar: React.FC = () => <Avatar src={src} icon={<UserOutlined />} />;

  const logout = () => {
    //make accessToken null and user empty and redirect to login page
    dispatch(changeAccessToken(null));
    dispatch(changeUser({}));
    navigate(AllUrls.login);
    message.success("Logged out successfully");
  };

  const checkAccessTokenValidation = () => {
    if (!accessToken) navigate(AllUrls.login);
    if (roleCheck && user.role !== roleCheck && config.appMode === "PRODUCTION") navigate(AllUrls.login);
  };
  if (checkToken) checkAccessTokenValidation();

  const checkIsPaidUser = () => {
    if (user?.isPaidUser) return;
    navigate(AllUrls.home);
    message.error("This feature is only available to paid users");
  };
  if (checkIsPaid) checkIsPaidUser();

  return { logout, isUserLoggedIn, UserAvatar, checkAccessTokenValidation, user, checkIsPaidUser };
};

export default useAuthHook;

import { useNavigate } from "react-router-dom";
import { AllUrls } from "@/router/urls";
import { useAppSelector } from "@/store/hook";

interface Props {
  navigateUrl?: string;
}

const useAccessTokenValidation = (props?: Props) => {
  const { navigateUrl } = props || {};
  const navigate = useNavigate();
  const { accessToken } = useAppSelector((root) => root.AuthRepo);
  if (!accessToken) navigate(navigateUrl || AllUrls.authUrls.login);
  return;
};

export default useAccessTokenValidation;

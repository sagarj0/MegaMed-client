import { useAppDispatch, useAppSelector } from "@/store/hook";
import { changeAccessToken } from "../service/repo/reducer";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchMe } from "../service/get-me/action";
import { useEffect, useState } from "react";
import { AllUrls } from "@/router/urls";
import useStatusMessage from "@/helper/hooks/use-message";
import { resetError, resetSuccess } from "../service/get-me/reducer";
import { Spin, Typography } from "antd";

//backend is redirected to this page if authentication succeeds, in oauth and in email verification

export const SuccessAuth: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const { success, error } = useAppSelector((root) => root.AuthGetMe);

  const [message, setMessage] = useState("Hang on! while we authenticate you...");

  useEffect(() => {
    if (token) {
      dispatch(changeAccessToken(token));
      dispatch(fetchMe());
    }
  }, [token, dispatch]);

  const onSuccessReset = () => {
    setMessage("Welcome! Redirecting...");
    setTimeout(() => navigate(AllUrls.home.home), 1000);
  };
  const onErrorReset = () => {
    setMessage("Something went wrong! Please try again later.");
    setTimeout(() => navigate(AllUrls.authUrls.login), 1500);
  };
  useStatusMessage({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset });

  return (
    <>
      <Spin
        spinning
        fullscreen
        tip={
          <Typography.Title level={5} style={{ marginTop: "1em" }}>
            {message}
          </Typography.Title>
        }
      />
    </>
  );
};

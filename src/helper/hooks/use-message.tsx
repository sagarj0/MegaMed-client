import { message } from "antd";
import React, { useEffect } from "react";
import { Action } from "redux";
import { useAppDispatch } from "@/store/hook";

export type StatusMessageType = {
  success?: string | null;
  error?: string | null;
  resetSuccess?: () => Action;
  resetError?: () => Action;
  onSuccessReset?: () => void;
  onErrorReset?: () => void;
};

const useStatusMessage: React.FC<StatusMessageType> = ({ success, error, resetSuccess, resetError, onSuccessReset, onErrorReset }) => {
  const dispatch = useAppDispatch();

  message.config({
    maxCount: 1,
    // prefixCls: "no-print",
  });

  useEffect(() => {
    if (success) {
      message.success(success);
      resetSuccess && dispatch(resetSuccess());
      onSuccessReset?.();
    }
    if (error) {
      message.error(error);
      resetError && dispatch(resetError());
      onErrorReset?.();
    }
  }, [dispatch, error, resetError, resetSuccess, success]);
  return null;
};

export default useStatusMessage;

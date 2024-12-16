import { message, notification } from "antd";
import React, { useEffect } from "react";
import { Action } from "redux";
import { useAppDispatch } from "@/store/hook";

export type StatusMessageType = {
  isNotification?: boolean;
  success?: string | null;
  error?: string | null;
  resetSuccess?: () => Action;
  resetError?: () => Action;
  onSuccessReset?: () => void;
  onErrorReset?: () => void;
};

const useStatusMessage: React.FC<StatusMessageType> = ({
  isNotification,
  success,
  error,
  resetSuccess,
  resetError,
  onSuccessReset,
  onErrorReset,
}) => {
  const dispatch = useAppDispatch();

  message.config({ maxCount: 1 });

  useEffect(() => {
    if (success) {
      isNotification || message.success(success);
      isNotification && notification.success({ message: success, placement: "top", duration: 0 });
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

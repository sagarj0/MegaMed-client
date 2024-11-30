import { useEffect } from "react";

type UseBeforeUnloadProps = {
  isActive: boolean;
};

const useBeforeUnload = ({ isActive }: UseBeforeUnloadProps) => {
  const message = "Are you sure you want to leave the page? Progress might be lost";
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (isActive) {
        event.preventDefault();
        event.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isActive, message]);
};

export default useBeforeUnload;

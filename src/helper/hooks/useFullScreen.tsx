import { useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { setFullScreen } from "@/store/reducers/full-screen/reducer";

const useFullScreen = () => {
  const dispatch = useAppDispatch();
  const { isFullScreen } = useAppSelector((root) => root.FullScreen);

  // Toggle full-screen state in Redux
  const toogleFullScreen = useCallback(() => {
    dispatch(setFullScreen(!isFullScreen));
  }, [dispatch, isFullScreen]);

  // Request full-screen mode
  const requestFullScreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      }
    } catch (err) {
      console.error(`Error enabling full-screen mode: ${(err as Error).message}`);
    }
  }, []);

  // Exit full-screen mode
  const exitFullScreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error(`Error exiting full-screen mode: ${(err as Error).message}`);
    }
  }, []);

  // Sync full-screen state with browser changes
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = Boolean(document.fullscreenElement);
      if (isCurrentlyFullScreen !== isFullScreen) {
        dispatch(setFullScreen(isCurrentlyFullScreen));
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, [dispatch, isFullScreen]);

  // React to `isFullScreen` state changes
  useEffect(() => {
    if (isFullScreen) {
      requestFullScreen();
    } else {
      exitFullScreen();
    }
  }, [isFullScreen, requestFullScreen, exitFullScreen]);

  return { isFullScreen, toogleFullScreen };
};

export default useFullScreen;

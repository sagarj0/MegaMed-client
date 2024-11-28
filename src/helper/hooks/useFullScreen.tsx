import { useState, useEffect } from "react";

const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const requestFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`);
      });
    }
  };

  useEffect(() => {
    if (isFullScreen) {
      requestFullScreen();
    } else {
      exitFullScreen();
    }
  }, [isFullScreen]);

  return { isFullScreen, setIsFullScreen };
};

export default useFullScreen;

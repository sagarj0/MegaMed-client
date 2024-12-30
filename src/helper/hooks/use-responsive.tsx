import { useState, useEffect } from "react";

type Breakpoints = {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;

  //devices
  isMobile: boolean;
};

const breakpoints = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600,
};

const useResponsiveDevice = (): Breakpoints => {
  const getDeviceBreakpoint = (): Breakpoints => {
    const width = window.innerWidth;

    return {
      xs: width <= breakpoints.xs,
      sm: width <= breakpoints.sm && width > breakpoints.xs,
      md: width <= breakpoints.md && width > breakpoints.sm,
      lg: width <= breakpoints.lg && width > breakpoints.md,
      xl: width <= breakpoints.xl && width > breakpoints.lg,
      xxl: width <= breakpoints.xxl && width > breakpoints.xl,

      //devices
      isMobile: width <= breakpoints.md,
    };
  };

  const [device, setDevice] = useState<Breakpoints>(() => getDeviceBreakpoint());

  useEffect(() => {
    const handleResize = (): void => {
      setDevice(getDeviceBreakpoint());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return device;
};

export default useResponsiveDevice;

import { AllUrls } from "@/router/urls";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export type SeoConfig = {
  [key: string]: {
    title: string;
    description: string;
  };
};

export const useSeoConfig = (seoConfig: SeoConfig) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const key = Object.entries(AllUrls).find(([_, value]) => {
      if (value === pathname) return true;
      return false;
    })?.[0];

    document.title = "Mega-Med" + " | " + (seoConfig[key!]?.title || "");
    document.querySelector('meta[name="description"]')?.setAttribute("content", seoConfig[pathname]?.description || "Page Not Found");
  }, [pathname]);

  return null;
};

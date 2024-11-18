// This file is created for those scenario where no environment variable file exists

type AppConfig = {
  apiUrl: string;
  appMode: "DEVELOPMENT" | "PRODUCTION" | "LOCAL";
  database: "REAL" | "MOCK";
};

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
  appMode: import.meta.env.VITE_APP_MODE || "LOCAL",
  database: import.meta.env.VITE_APP_DB || "MOCK",
};

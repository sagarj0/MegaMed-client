// This file is created for those scenario where no environment variable file exists

type AppConfig = {
  apiUrl: string;
  appMode: "DEVELOPMENT" | "PRODUCTION" | "LOCAL";
  database: "REAL" | "MOCK";

  //firebaseConfig
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
  //firebaseConfig
};

export const config: AppConfig = {
  apiUrl: import.meta.env.VITE_API_URL || "http://localhost:3000",
  appMode: import.meta.env.VITE_APP_MODE || "LOCAL",
  database: import.meta.env.VITE_APP_DB || "MOCK",

  //firebaseConfig
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "",
  //firebaseConfig
};

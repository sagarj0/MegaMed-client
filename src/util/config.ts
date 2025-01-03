type AppConfig = {
  readonly apiUrl: string;
  readonly appMode: "DEVELOPMENT" | "PRODUCTION" | "LOCAL";
  readonly database: "REAL" | "MOCK";

  //firebaseConfig
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
  readonly measurementId?: string;
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
};

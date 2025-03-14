import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import * as AuthRepo from "../module/auth/service/";
import * as AdminModuleReducers from "../module/admin/service/";
import * as MentorReducers from "../module/mentor/service/";
import * as StudentReducers from "../module/student/services";
import * as HelperReducers from "./reducers/";
import * as CommonReducers from "../module/common/reducers/";

const rootReducer = combineReducers({
  ...AuthRepo,
  ...AdminModuleReducers,
  ...MentorReducers,
  ...StudentReducers,
  ...HelperReducers,
  ...CommonReducers,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["AuthRepo", "QuizHelper"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.VITE_APP_MODE === "LOCAL",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

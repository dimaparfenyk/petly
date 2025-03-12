import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { filtersReducer } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";
import { petsReducer } from "./pets/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const filtersPersistConfig = {
  key: "filters",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    pets: petsReducer,
    filters: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: import.meta.env.MODE !== "production",
});

export const persistor = persistStore(store);

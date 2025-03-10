import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
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

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    pets: petsReducer,
    filters: filtersReducer,
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
=======
import { setupListeners } from "@reduxjs/toolkit/query";
import { filtersReducer } from "./filters/filtersSlice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: { auth: authReducer, filters: filtersReducer },
});

setupListeners(store.dispatch);
>>>>>>> 77a771230dd04676a1739f02f850a47d4e4737ec

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/app/entries/User";
import { authFormReducer } from "@/app/(auth)/model";
export const makeStore = () => {
  return configureStore({
    reducer: { userReducer, authFormReducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

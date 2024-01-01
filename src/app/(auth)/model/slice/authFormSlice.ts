import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthFormSchema } from "../types/auth";

const initialState: AuthFormSchema = {
  username: "",
  password: "",
};
const authFormSlice = createSlice({
  name: "authForm",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassWord: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});
export const { actions: authFormActions } = authFormSlice;
export const { reducer: authFormReducer } = authFormSlice;

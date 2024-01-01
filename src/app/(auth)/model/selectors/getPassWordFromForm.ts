import { RootState } from "@/store";

export const getPassWordFromForm = (state: RootState) => {
  state.authFormReducer.password;
};

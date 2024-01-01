import { RootState } from "@/store";

export const getUserNameFromForm = (state: RootState) => {
  state.authFormReducer.username;
};

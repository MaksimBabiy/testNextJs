import { RootState } from "@/store";
import { User } from "../..";

export const getUserData = (store: RootState) => {
  store.userReducer.data;
};

export interface User {
  username: string;
  password: string;
}

export interface UserSchema {
  data: User | undefined;
  isLoading: boolean;
  isError: boolean;
}

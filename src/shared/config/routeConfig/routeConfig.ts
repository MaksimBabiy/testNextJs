export enum AppRoutes {
  HOME = "home",
  USERS = "users",
  CALLS = "calls",
  CHATS = "chats",
  SETTINGS = "settings",
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: "/",
  [AppRoutes.USERS]: "/users",
  [AppRoutes.CALLS]: "/calls",
  [AppRoutes.CHATS]: "/chats",
  [AppRoutes.SETTINGS]: "/settings",
};

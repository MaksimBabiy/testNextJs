import { RoutePath } from "@/shared/config/routeConfig/routeConfig";
import { SideBarItem } from "../types/types";
import { MessagesSquare, Phone, Settings, Users2 } from "lucide-react";

export const SideBarItemsList: SideBarItem[] = [
  {
    path: RoutePath.users,
    icon: Users2,
  },
  {
    path: RoutePath.calls,
    icon: Phone,
  },
  {
    path: RoutePath.chats,
    icon: MessagesSquare,
  },
  {
    path: RoutePath.settings,
    icon: Settings,
  },
];

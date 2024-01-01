import React from "react";
import cls from "./UnreadCount.module.scss";
type Props = {};

export const UnreadCount = (props: Props) => {
  return <div className={cls.count}>5</div>;
};

export default UnreadCount;

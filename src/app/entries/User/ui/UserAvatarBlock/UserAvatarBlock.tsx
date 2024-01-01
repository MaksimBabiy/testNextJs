import React from "react";
import Image, { StaticImageData } from "next/image";
import Text from "@/shared/ui/Text/ui/Text";
import cls from "./UserAvatarBlock.module.scss";
import Avatar from "../Avatar/Avatar";

type Props = {
  title?: string;
  text?: string;
  avatar: StaticImageData;
};

export const UserAvatarBlock = ({ title, text, avatar }: Props) => {
  return (
    <div className="flex">
      <Avatar avatar={avatar} />
      <div className={cls.avatarInfo}>
        <Text title={title && title} />
        <Text text={text && text} />
      </div>
    </div>
  );
};

export default UserAvatarBlock;

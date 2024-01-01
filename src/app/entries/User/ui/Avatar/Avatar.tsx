import React from "react";
import Image, { StaticImageData } from "next/image";
import cls from "../Avatar/Avatar.module.scss";
type Props = {
  avatar: StaticImageData;
  classnames?: string;
};

export const Avatar = ({ classnames, avatar }: Props) => {
  return (
    <Image
      alt="avatar"
      src={avatar}
      width={60}
      height={60}
      className={`${cls.avatar} ${classnames}`}
    />
  );
};

export default Avatar;

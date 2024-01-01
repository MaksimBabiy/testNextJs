import React from "react";
import avatar from "../../../../public/friendAvatar.png";
import Image from "next/image";
import cls from "./StoryItem.module.scss";
import Text from "@/shared/ui/Text/ui/Text";
import { Plus } from "lucide-react";
type Props = {
  isMyStory?: boolean;
};

const StoryItem = ({ isMyStory }: Props) => {
  return !isMyStory ? (
    <div className={cls.userStory}>
      <Image
        src={avatar}
        alt={""}
        width={60}
        height={60}
        className={cls.border}
      />
      <Text title="Skylar R." />
    </div>
  ) : (
    <div className={cls.userStory}>
      <div className={cls.mystory}>
        <Plus color="#4b5358" />
      </div>
      <Text title="My Story" />
    </div>
  );
};

export default StoryItem;

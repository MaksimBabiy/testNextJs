import Text from "@/shared/ui/Text/ui/Text";
import React from "react";

type Props = {};

export const SharedLinkItem = (props: Props) => {
  return (
    <div className="flex">
      <div className="w-[50px] h-[50px]"></div>
      <div>
        <Text title="Banking UI kit. Dark Mode." />
        <Text text="https://dev.ops.//" />
      </div>
    </div>
  );
};

export default SharedLinkItem;

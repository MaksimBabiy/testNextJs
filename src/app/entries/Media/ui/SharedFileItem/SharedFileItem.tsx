import Text from "@/shared/ui/Text/ui/Text";
import { ArrowDownToLine } from "lucide-react";
import React from "react";

type Props = {};

export const SharedFileItem = (props: Props) => {
  return (
    <div className="flex justify-between mb-3 items-center">
      <div className="flex">
        <div className="w-[50px] h-[50px] border rounded-lg flex justify-center items-center mr-5"></div>
        <div className="flex flex-col justify-center">
          <Text title="UARM.sketch" />
          <Text text="04.20.21 * 200mb" />
        </div>
      </div>
      <ArrowDownToLine className="cursor-pointer" />
    </div>
  );
};

export default SharedFileItem;

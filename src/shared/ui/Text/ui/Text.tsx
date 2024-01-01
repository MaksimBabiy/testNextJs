import React from "react";
import cls from "./Text.module.scss";
type Props = {
  text?: string;
  title?: string;
  classname?: string;
};

const Text = ({ text, title, classname }: Props) => {
  return (
    <div className={classname}>
      {text && <p className={cls.text}>{text}</p>}
      {title && <p className={cls.title}>{title}</p>}
    </div>
  );
};

export default Text;

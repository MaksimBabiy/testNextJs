import React, { ButtonHTMLAttributes } from "react";
import cls from "./Button.module.scss";
import { classNames } from "@/shared/hooks/classnames";

type ExtendedButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children"
>;

interface Props extends ExtendedButtonProps {
  children: React.ReactNode;
}

const Button = ({ children, className, onClick, ...otherProps }: Props) => {
  return (
    <button
      onClick={onClick}
      className={classNames(cls.button, {}, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

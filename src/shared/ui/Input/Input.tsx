"use client";
import { classNames } from "@/shared/hooks/classnames";
import React, { InputHTMLAttributes } from "react";
import cls from "./Input.module.scss";
type ExtendedInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>;

interface Props extends ExtendedInputProps {
  value?: string | number;
  onChange?: (e: string) => void;
  readonly?: boolean;
}
const Input = ({
  value,
  onChange,
  readonly,
  className,
  ...otherProps
}: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      value={value}
      className={classNames(cls.input, {}, [className])}
      onChange={onChangeHandler}
      readOnly={readonly}
      {...otherProps}
    />
  );
};

export default Input;

"use client";
import Button from "@/shared/ui/Button/Button";
import Input from "@/shared/ui/Input/Input";
import { useAppDispatch } from "@/store";
import { AtSign, LockKeyhole } from "lucide-react";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { authFormActions } from "../model";
import { useDebounce } from "@/shared/hooks/useDebounce";

type Props = {};

const Login = (props: Props) => {
  const dispatch = useAppDispatch();
  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const debounceValue = useDebounce(usernameValue, 500);
  const debounceValue2 = useDebounce(passwordValue, 500);
  const onChangeUserName = () => {
    dispatch(authFormActions.setUserName(usernameValue));
  };
  const onChangePassWord = () => {
    dispatch(authFormActions.setPassWord(passwordValue));
  };
  useEffect(() => {
    onChangeUserName();
  }, [debounceValue]);
  useEffect(() => {
    onChangePassWord();
  }, [debounceValue2]);

  return (
    <div className="flex items-center justify-around w-[300px] h-[200px] bg-[#e0e2db] flex-col m-auto rounded-2xl">
      <div className="flex flex-col">
        <div className="flex items-center">
          <AtSign className="mr-5" />
          <Input
            placeholder="Email or Nickname"
            className="px-4 py-2 outline-none rounded-lg"
            onChange={(e) => setUsernameValue(e)}
          />
        </div>
        <div className="flex items-center mt-5">
          <LockKeyhole className="mr-5" />
          <Input
            placeholder="Password"
            className="px-4 py-2 outline-none rounded-l"
            onChange={(e) => setPasswordValue(e)}
          />
        </div>
        <div className="flex justify-between ">
          <Link href={"/register"} className="self-center">
            Register
          </Link>
          <Button className="self-end mt-5">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";
import { getLogin } from "@/service/login/api";

export const Header = () => {
  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-white px-16 shadow-md">
      <span className="text-2xl font-semibold">Chart It</span>
      <span
        className="cursor-pointer duration-300 hover:opacity-60"
        onClick={() => getLogin()}
      >
        로그인
      </span>
    </div>
  );
};

"use client";
import { Button } from "@chartit/ui";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "@/service/login/api";
const LoginPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="grid h-[30rem] grid-cols-2 rounded-lg border border-gray-300 p-8 shadow-lg">
        <div className="flex flex-col gap-2 border-r border-gray-300 pr-6">
          <span className="text-xl font-medium">소셜 로그인</span>
          <Button
            onClick={() => signIn("google")}
            sizes="full"
            className="rounded-md border border-gray-300 py-2 font-medium hover:opacity-90"
          >
            <FcGoogle size="1.5rem" />
            Continue With Google
          </Button>
          <Button
            onClick={() => signIn("github")}
            sizes="full"
            className="bg-github rounded-md py-2 font-medium text-white hover:opacity-90"
          >
            <FaGithub size="1.5rem" />
            Continue With Github
          </Button>
        </div>
        <div className="flex h-full flex-col pl-6">
          <span className="text-xl font-medium">기존 계정으로 로그인</span>
          <Button className="" sizes="full"></Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

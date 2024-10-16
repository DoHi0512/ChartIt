"use client";
import { Button } from "@chartit/ui";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useSignIn } from "@/service/login/mutations";
const LoginPage = () => {
  const { signInMutate } = useSignIn();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex w-[35rem] flex-col gap-2 rounded-lg border border-gray-300 p-8 shadow-lg">
        <span className="text-center text-2xl font-bold">소셜 로그인</span>
        <Button
          onClick={() => signInMutate("google")}
          sizes="full"
          className="rounded-md border border-gray-300 py-2 font-medium hover:opacity-90"
        >
          <FcGoogle size="1.5rem" />
          Continue With Google
        </Button>
        <Button
          onClick={() => signInMutate("github")}
          sizes="full"
          className="rounded-md bg-github py-2 font-medium text-white hover:opacity-90"
        >
          <FaGithub size="1.5rem" />
          Continue With Github
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

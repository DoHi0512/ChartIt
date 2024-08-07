import useUser from "@/hooks/useUser";
import { useSignOut } from "@/service/login/mutations";

import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const { user } = useUser();
  const { signOutMutate } = useSignOut();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  console.log(user);
  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-white px-16 shadow-md">
      <Link href="/" className="text-2xl font-semibold">
        Chart It
      </Link>
      {user && isClient ? (
        <span
          className="cursor-pointer duration-300 hover:opacity-60"
          onClick={() => signOutMutate()}
        >
          {user.email}
        </span>
      ) : (
        <Link
          href="/login"
          className="cursor-pointer duration-300 hover:opacity-60"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

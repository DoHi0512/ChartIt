import useUser from "@/hooks/useUser";
import Link from "next/link";

export const Header = () => {
  const { user } = useUser();
  console.log(user);
  return (
    <div className="fixed z-10 flex h-16 w-full items-center justify-between bg-white px-16 shadow-md">
      <Link href="/" className="text-2xl font-semibold">
        Chart It
      </Link>
      {user ? (
        <Link
          href="/login"
          className="cursor-pointer duration-300 hover:opacity-60"
        >
          {user.email}
        </Link>
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

import useUser from "@/hooks/useUser";
import { useSignOut } from "@/service/login/mutations";
import Link from "next/link";
export const Header = () => {
  const { user } = useUser();
  const { signOutMutate } = useSignOut();

  return (
    <div className="fixed z-10 flex h-16 w-full items-center gap-8 bg-white px-16 shadow-md">
      <Link href="/" className="text-xl font-semibold hover:text-primary">
        홈으로
      </Link>
      {user ? (
        <>
          <Link
            href="/list"
            className="text-xl font-semibold hover:text-primary"
          >
            리스트
          </Link>
          <Link
            href="/draw/bar"
            className="text-xl font-semibold hover:text-primary"
          >
            차트 그리기
          </Link>
        </>
      ) : null}
      {user ? (
        <span
          className="flex-1 cursor-pointer text-right duration-300 hover:opacity-60"
          onClick={() => signOutMutate()}
        >
          {user.email}
        </span>
      ) : (
        <Link
          href="/login"
          className="flex-1 cursor-pointer text-right duration-300 hover:opacity-60"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

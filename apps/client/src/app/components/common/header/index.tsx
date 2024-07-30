export const Header = () => {
  return (
    <div className="fixed flex h-16 w-full items-center justify-between bg-white px-16 shadow-md">
      <span className="text-2xl font-semibold">Chart It</span>
      <span className="cursor-pointer duration-300 hover:opacity-60">
        로그인
      </span>
    </div>
  );
};

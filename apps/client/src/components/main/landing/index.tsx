"use client";
import useUser from "@/hooks/useUser";
import { Button } from "@chartit/ui";
const Landing = () => {
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center gap-6 border-gray-400 p-16">
      <span className="text-5xl font-bold">
        쉽고 빠르게 원하는 차트를 그려보세요
      </span>
      <span className="text-lg text-gray-400">
        다양한 차트를 그리고 이미지로 바꿔보세요
      </span>
      <Button
        href={!!user ? "/draw/bar" : "/login"}
        sizes="xl"
        className="rounded-md bg-primary py-3 font-medium text-white hover:opacity-90"
      >
        지금 시작하기
      </Button>
    </div>
  );
};

export default Landing;

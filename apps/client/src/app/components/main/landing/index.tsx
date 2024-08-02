import { Button } from "@chartit/ui";
const Landing = () => {
  return (
    <div className="flex flex-col items-center gap-6 border-b border-gray-400 px-16 py-8">
      <span className="text-5xl font-bold">
        쉽고 빠르게 원하는 차트를 그려보세요
      </span>
      <span className="text-lg text-gray-400">
        36가지의 차트를 손쉽게 그리고 수정하세요.
      </span>
      <Button
        sizes="lg"
        className="bg-primary rounded-md font-medium text-white"
      >
        지금 시작하기
      </Button>
    </div>
  );
};

export default Landing;

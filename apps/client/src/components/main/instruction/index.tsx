import Image from "next/image";

const Instruction = () => {
  return (
    <div className="relative flex gap-16 bg-gray-100 px-24 py-12">
      <div className="flex shrink-0 flex-col">
        <span className="text-3xl font-bold">사용 방법</span>
        <span className="mt-2 text-lg">1. 차트 타입 선택</span>
        <span className="text-lg">2. 데이터 입력</span>
        <span className="text-lg">3. 색상 및 레이아웃 커스터마이징</span>
        <span className="text-lg">4. 이미지로 저장</span>
      </div>
      <Image
        src="/example.png"
        className="flex-1 rounded-md object-contain shadow-md"
        sizes="100%"
        width={0}
        height={0}
        alt="에시"
      />
    </div>
  );
};

export default Instruction;

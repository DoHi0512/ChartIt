import Image from "next/image";

interface GraphItemProps {
  name: string;
  image: string;
}
const GraphItem = ({ name, image }: GraphItemProps) => {
  return (
    <div className="flex h-32 w-32 flex-shrink-0 flex-col items-center justify-between rounded-xl border border-gray-300 p-4">
      <Image
        src={"/" + image + ".svg"}
        width={60}
        height={60}
        alt="그래프 이미지"
      />
      <span className="text-sm font-bold">{name}</span>
    </div>
  );
};

export default GraphItem;

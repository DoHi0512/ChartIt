import GraphItem from "./item";

const GraphList = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <span className="text-3xl font-bold">원하는 차트를 그려보세요</span>
      <span className="text-gray-400">
        36가지의 다양한 차트를 손쉽게 그리고 수정하세요.
      </span>
      <div className="grid w-full grid-cols-5 gap-8">
        <GraphItem name="막대 그래프" image="bar" />
        <GraphItem name="그래프" image="bar" />
      </div>
    </div>
  );
};

export default GraphList;

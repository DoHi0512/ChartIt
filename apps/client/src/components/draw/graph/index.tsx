import { ResponsiveBar } from "@nivo/bar";

const GraphSection = () => {
  return (
    <div className="h-full flex-1">
      <ResponsiveBar
        data={[
          { id: 1, fanta: 1100 },
          { id: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
          { id: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
        ]}
        keys={["cola", "cidar", "fanta"]}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        colorBy="id" // 색상을 keys 요소들에 각각 적용
      />
    </div>
  );
};

export default GraphSection;

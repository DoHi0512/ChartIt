"use client";
import { useOptionValueState } from "@/store/options";
import { ResponsiveBar } from "@nivo/bar";

const GraphSection = () => {
  const option = useOptionValueState();
  return (
    <div className="h-full flex-1">
      <ResponsiveBar
        {...option}
        data={[
          { id: "250ml", fanta: 1100 },
          { id: "500ml", cola: 2200, cidar: 2000, fanta: 2100 },
          { id: "1000ml", cola: 3200, cidar: 3000, fanta: 3100 },
          { id: "1250ml", fanta: 1100 },
          { id: "1500ml", cola: 2200, cidar: 2000, fanta: 2100 },
          { id: "21000ml", cola: 3200, cidar: 3000, fanta: 3100 },
        ]}
        keys={["cola", "cidar", "fanta"]}
        margin={{ top: 50, right: 25, bottom: 50, left: 50 }}
        colors={{ scheme: "nivo" }}
        labelSkipHeight={100}
        labelSkipWidth={100}
        // legends={[
        //   {
        //     dataFrom: "keys",
        //     anchor: "bottom-right",
        //     direction: "column",
        //     itemDirection: "left-to-right",
        //     justify: false,
        //     translateX: 120,
        //     translateY: 0,
        //     itemsSpacing: 2,
        //     itemWidth: 100,
        //     itemHeight: 20,
        //   },
        // ]}
      />
    </div>
  );
};

export default GraphSection;

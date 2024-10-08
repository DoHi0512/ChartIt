import { forwardRef, RefObject } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { useOptionValueState } from "@/store/options";
import { ResponsivePie } from "@nivo/pie";

interface IGraphSectionProps {
  ref?: RefObject<HTMLDivElement>;
  type: string | string[];
}

const GraphSection = forwardRef<HTMLDivElement, IGraphSectionProps>(
  (props, ref) => {
    const option = useOptionValueState();
    if (!option.data)
      return (
        <div className="flex h-full flex-1 items-center justify-center text-lg font-bold">
          데이터를 입력해 차트를 그리세요.
        </div>
      );
    return (
      <div ref={ref} className="h-full w-full bg-white">
        {props.type == "bar" ? (
          <ResponsiveBar
            {...option}
            labelPosition="start"
            colors={{ scheme: option.colors }}
            margin={{ top: 50, right: 100, bottom: 50, left: 50 }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                itemDirection: "left-to-right",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
              },
            ]}
          />
        ) : (
          <ResponsivePie
            {...option}
            colors={{ scheme: option.colors }}
            margin={{ top: 75, right: 75, bottom: 75, left: 75 }}
          />
        )}
      </div>
    );
  },
);

GraphSection.displayName = "graph";

export default GraphSection;

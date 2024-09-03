import { GraphOptionType } from "@/types/graph";

interface IGRAPH_OPTIONS {
  [name: string]: {
    description: string;
    options: {
      style: GraphOptionType[];
      base: GraphOptionType[];
    };
  };
}

interface IOPTIONS_INIT {
  [name: string]: {
    [option: string]: any;
  };
}

export const OPTIONS_INIT: IOPTIONS_INIT = {
  bar: {
    groupMode: "stacked",
    layout: "vertical",
    reverse: false,
    padding: 0.1,
    innerPadding: 0,
  },
};

export const GRAPH_OPTIONS: IGRAPH_OPTIONS = {
  bar: {
    description:
      "Bar chart which can display multiple data series, stacked or side by side. Also supports both vertical and horizontal layout, with negative values descending below the x axis (or y axis if using horizontal layout).",
    options: {
      base: [
        { desc: "Chart Data", name: "data", type: "data", optional: false },
        {
          desc: "How to groups bars.",
          name: "groupMode",
          type: "choise",
          settings: ["stacked", "grouped"],
        },
        {
          desc: "How to display bars.",
          name: "layout",
          type: "choise",
          settings: ["vertical", "horizontal"],
        },
        {
          desc: "Reverse bars, starts on top instead of bottom for vertical layout and right instead of left for horizontal one.",
          name: "reverse",
          type: "toggle",
        },
        {
          desc: "Padding between each bar (ratio).",
          name: "padding",
          type: "slide",
          scale: { max: 0.9, min: 0, step: 0.05 },
        },
        {
          desc: "Padding between grouped/stacked bars.",
          name: "innerPadding",
          type: "slide",
          scale: { max: 10, min: 0, step: 1 },
        },
      ],
      style: [],
    },
  },
};

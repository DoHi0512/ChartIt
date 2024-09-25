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
    minValue: "auto",
    maxValue: "auto",
    colors: "nivo",
    colorBy: "id",
    borderRadius: 0,
    borderWidth: 0,
    enableLabel: true,
    labelSkipWidth: 12,
    labelSkipHeight: 12,
    // labelPosition: "middle",
    // labelOffset: 0,
    enableTotals: false,
    totalOffset: 10,
  },
};

export const GRAPH_OPTIONS: IGRAPH_OPTIONS = {
  bar: {
    description:
      "여러 데이터 시리즈를 한 번에 보여줄 수 있는 막대 차트입니다. 데이터를 겹쳐서 쌓거나 나란히 배치할 수 있고, 세로와 가로 레이아웃 모두 사용할 수 있어요. 음수 값은 x축 아래로(가로 레이아웃의 경우 y축 아래로) 자연스럽게 내려갑니다.",
    options: {
      base: [
        { desc: "차트 데이터", name: "data", type: "data", optional: false },
        {
          desc: "막대를 그룹화하는 방법",
          name: "groupMode",
          type: "choise",
          settings: ["stacked", "grouped"],
        },
        {
          desc: "막대를 표시하는 방법",
          name: "layout",
          type: "choise",
          settings: ["vertical", "horizontal"],
        },
        {
          desc: "위/아래 또는 세로/가로 반전",
          name: "reverse",
          type: "toggle",
        },
        {
          desc: "긱 막대 사이의 간격",
          name: "padding",
          type: "slide",
          scale: { max: 0.9, min: 0, step: 0.05 },
        },
        {
          desc: "그룹화되거나 쌓인 막대 간의 간격",
          name: "innerPadding",
          type: "slide",
          scale: { max: 10, min: 0, step: 1 },
        },
        {
          desc: "데이터의 최소값",
          name: "minValue",
          type: "toggle",
          scale: { max: 0, min: -1000, step: 1 },
        },
        {
          desc: "데이터의 최대값",
          name: "maxValue",
          type: "toggle",
          scale: { max: 1000, min: 0, step: 1 },
        },
      ],
      style: [
        {
          desc: "차트 색상",
          name: "colors",
          type: "select",
          settings: ["nivo", "category10", "accent"],
        },
        {
          desc: "각 블럭 색상의 기준",
          name: "colorBy",
          type: "select",
          settings: ["id", "indexValue"],
        },
        {
          desc: "모서리 굴곡",
          name: "borderRadius",
          type: "slide",
          scale: { min: 0, max: 36, step: 1 },
        },
        {
          desc: "테두리 크기",
          name: "borderWidth",
          type: "slide",
          scale: { min: 0, max: 24, step: 1 },
        },
        {
          desc: "라벨 켜기/끄기",
          name: "enableLabel",
          type: "toggle",
        },
        {
          desc: "설정한 크기보다 작아지면 라벨을 숨김 (px)",
          name: "labelSkipWidth",
          type: "slide",
          scale: { min: 0, max: 36, step: 1 },
        },
        {
          desc: "설정한 높이보다 작아지면 라벨을 숨김 (px)",
          name: "labelSkipHeight",
          type: "slide",
          scale: { min: 0, max: 36, step: 1 },
        },
        // {
        //   desc: "라벨 위치",
        //   name: "labelPosition",
        //   type: "choise",
        //   settings: ["start", "middle", "end"],
        // },
        // {
        //   desc: "라벨 오프셋",
        //   name: "labelOffset",
        //   type: "slide",
        //   scale: { min: -16, max: 16, step: 1 },
        // },
        {
          desc: "라벨값 합계 켜기/끄기",
          name: "enableTotals",
          type: "toggle",
        },
        {
          desc: "라벨값 합계 오프셋",
          name: "totalsOffset",
          type: "slide",
          scale: { min: 0, max: 40, step: 1 },
        },
      ],
    },
  },
};

import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#20c997",
        github: "#21262d",
        "primary-hover": "#1dbd9c",
      },
      screens: {
        im: "0px",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#20c997",
        github: "#21262d",
        "primary-hover": "#1dbd9c",
      },
    },
  },
  plugins: [],
};
export default config;

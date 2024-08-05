import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        primary: "#20c997",
      },
    },
  },
  plugins: [],
};
export default config;

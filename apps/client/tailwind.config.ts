import type { Config } from "tailwindcss";
import sharedConfig from "@chartit/config-tailwind";
const config: Pick<Config, "content" | "presets"> = {
  content: ["**/src/**/*.{js,ts,jsx,tsx}", "**/src/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};
export default config;

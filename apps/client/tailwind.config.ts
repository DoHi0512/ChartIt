import type { Config } from "tailwindcss";
import sharedConfig from "@chartit/config-tailwind";
const config: Pick<Config, "content" | "presets"> = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [sharedConfig],
};
export default config;

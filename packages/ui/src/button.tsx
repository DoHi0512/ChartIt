import { ButtonHTMLAttributes } from "react";
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizes?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "fit";
}
const Button = ({ children, sizes = "md", ...props }: BtnProps) => {
  const SIZE: any = {
    xs: "text-xs px-2",
    sm: "text-sm px-3",
    md: "text-base px-4",
    lg: "text-lg px-5",
    xl: "text-xl px-6",
    full: "w-full text-base",
    fit: "w-fit text-base",
  };
  return <button className={`${SIZE[sizes]} flex justify-center items-center`}>{children}</button>;
};

export default Button;

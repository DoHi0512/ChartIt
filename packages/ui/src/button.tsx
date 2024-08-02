import { ButtonHTMLAttributes } from "react";
export interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizes?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "fit";
}
const Button = ({ children, sizes = "md", className, ...props }: BtnProps) => {
  const SIZE: any = {
    xs: "text-xs px-2",
    sm: "text-sm px-3",
    md: "text-base px-4",
    lg: "text-lg px-5",
    xl: "text-xl px-6",
    full: "w-full text-base",
    fit: "w-fit text-base",
  };
  return (
    <button
      {...props}
      className={`${className} ${SIZE[sizes]} py-2 flex justify-center items-center hover:opacity-70 duration-300 `}
    >
      {children}
    </button>
  );
};

export default Button;

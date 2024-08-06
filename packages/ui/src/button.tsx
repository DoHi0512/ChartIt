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
    full: "w-full text-base px-4",
    fit: "w-fit text-base px-4",
  };

  return (
    <button {...props} className={`${className} justify-center flex gap-4 items-center ${SIZE[sizes]}`}>
      {children}
    </button>
  );
};

export default Button;

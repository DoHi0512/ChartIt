import { ButtonHTMLAttributes } from "react";
interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  types?: "ghost" | "filled" | "tonal" | "text";
  sizes?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "fit";
}

const Button = ({ children, sizes = "md", types = "filled", ...props }: BtnProps) => {
  return <div className="w-fit">{children}</div>;
};

export default Button;

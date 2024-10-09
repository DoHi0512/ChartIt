import { ButtonHTMLAttributes } from "react";
interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizes?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "fit";
  href?: string;
}
const Button = ({ children, sizes = "md", className, href, ...props }: BtnProps) => {
  const SIZE: any = {
    xs: "text-xs px-1",
    sm: "text-sm px-2",
    md: "text-base px-3",
    lg: "text-lg px-4",
    xl: "text-xl px-5",
    full: "w-full text-base px-4",
    fit: "w-fit text-base px-4",
  };

  return (
    <button {...props}>
      <a href={href} className={`${className}  justify-center flex gap-4 items-center ${SIZE[sizes]}`}>
        {children}
      </a>
    </button>
  );
};

export default Button;

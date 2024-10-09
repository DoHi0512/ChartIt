import Link from "next/link";
import { ReactNode } from "react";

interface ISideItem {
  children: ReactNode;
  type: string;
  active?: boolean;
}

const SideItem = ({ children, type, active = false }: ISideItem) => {
  return (
    <Link
      href={`/draw/${type}`}
      className={`cursor-pointer rounded-sm p-1 duration-200 hover:bg-gray-200 hover:text-primary [&>svg]:h-10 [&>svg]:w-10 ${active ? "text-primary" : "text-black"}`}
    >
      {children}
    </Link>
  );
};

export default SideItem;

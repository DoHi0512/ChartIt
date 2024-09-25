import Link from "next/link";
import { ReactNode } from "react";

interface ISideItem {
  children: ReactNode;
  type: string;
}

const SideItem = ({ children, type }: ISideItem) => {
  return (
    <Link
      href={`/draw/${type}`}
      className="cursor-pointer rounded-sm p-1 duration-200 hover:bg-gray-200 [&>svg]:h-10 [&>svg]:w-10 [&>svg]:hover:text-primary"
    >
      {children}
    </Link>
  );
};

export default SideItem;

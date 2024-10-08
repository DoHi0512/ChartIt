import { GRAPH_ICONS } from "@/constants/graph";
import { GraphOptionType } from "@/types/graph";
import capitalize from "@/utils/share/capitalize";
import Link from "next/link";

interface IListItem {
  type: string;
  lastModified: string;
  title: string;
  options: GraphOptionType[];
}
const ListItem = ({ type, lastModified, title, options }: IListItem) => {
  return (
    <Link
      href={`/draw/${type}?options=${JSON.stringify(options)}`}
      className="flex w-full cursor-pointer flex-col gap-12 rounded-md border border-gray-300 p-6 shadow-sm duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-center justify-between [&>svg]:h-6 [&>svg]:w-6">
        <span className="text-xl font-semibold">{title}</span>
        {GRAPH_ICONS[type]}
      </div>
      <div className="text-gray-400">
        {capitalize(type)} 그래프 · {lastModified}
      </div>
    </Link>
  );
};

export default ListItem;

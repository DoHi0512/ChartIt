"use client";
import ListItem from "@/components/list/item";
import useUser from "@/hooks/useUser";
import { useGraphList } from "@/service/graph/queries";

const ListPage = () => {
  const { user } = useUser();
  const { data } = useGraphList(user?.id);
  const List = data?.map((item, idx) => <ListItem {...item} />);
  return (
    <div className="flex flex-col px-16 py-8">
      <span className="text-3xl font-bold">저장된 그래프 옵션</span>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {List}
      </div>
    </div>
  );
};

export default ListPage;

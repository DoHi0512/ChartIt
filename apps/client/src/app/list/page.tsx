"use client";
import ListItem from "@/components/list/item";
import useUser from "@/hooks/useUser";
import { useGraphList } from "@/service/graph/queries";
import { Button } from "@chartit/ui";

const ListPage = () => {
  const { user } = useUser();
  const { data } = useGraphList(user?.id);
  const List = data?.map((item, idx) => <ListItem key={idx} {...item} />);
  return (
    <div className="flex flex-col px-16 py-8">
      <span className="text-3xl font-bold">저장된 그래프 옵션</span>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {data?.length ? (
          List
        ) : (
          <Button
            href="/draw/bar"
            sizes="xl"
            className="rounded-md bg-primary py-2 text-white duration-200 hover:bg-primary-hover"
          >
            새로 만들기
          </Button>
        )}
      </div>
    </div>
  );
};

export default ListPage;

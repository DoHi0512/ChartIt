import { getUserQuery } from "@/service/user/queries";
import { useUserStore } from "@/store/user";
import { useEffect } from "react";

const useUser = () => {
  const [user, setUser] = useUserStore();
  const { data, ...restQuery } = getUserQuery();

  useEffect(() => {
    if (data) setUser(data.user);
  }, [setUser, data]);

  return { user, ...restQuery };
};

export default useUser;

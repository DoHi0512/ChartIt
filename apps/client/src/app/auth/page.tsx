"use client";
import { getUser } from "@/service/user/api";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Auth = () => {
  const params = useSearchParams();
  const code = params.get("code");
  useEffect(() => {
    getUser();
  }, []);
  return <div>HIU</div>;
};

export default Auth;

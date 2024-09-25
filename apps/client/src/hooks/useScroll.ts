"use client";
import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const onScroll = () => {
        const { scrollY } = window;
        setScroll(scrollY);
      };
      window.addEventListener("scroll", onScroll);
      () => window.removeEventListener("scroll", onScroll);
    }
  }, []);

  return { scroll };
};

export default useScroll;

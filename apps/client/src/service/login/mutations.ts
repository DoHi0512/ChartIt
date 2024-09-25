import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signIn, signOut } from "./api";
import { toast } from "react-toastify";
export const useSignOut = () => {
  const queryClient = useQueryClient();
  const { mutate: signOutMutate, ...restMutation } = useMutation({
    mutationFn: signOut,
    onError: () => {
      toast.error("로그아웃 실패");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그아웃 성공");
    },
  });

  return { signOutMutate, ...restMutation };
};

export const useSignIn = () => {
  const queryClient = useQueryClient();
  const { mutate: signInMutate, ...restMutation } = useMutation({
    mutationFn: (provider: "google" | "github") => signIn(provider),
    onError: () => {
      toast.error("로그인 실패");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("로그인 성공");
    },
  });
  return { signInMutate, ...restMutation };
};

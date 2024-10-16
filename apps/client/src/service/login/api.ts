import supabase from "@/utils/supabase/client";

export const signIn = async (provider: "google" | "github") => {
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "http://localhost:3000/list",
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

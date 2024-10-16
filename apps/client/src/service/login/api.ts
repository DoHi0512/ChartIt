import supabase from "@/utils/supabase/client";

export const signIn = async (provider: "google" | "github") => {
  await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "https://chart-it.netlify.app/list",
    },
  });
};

export const signOut = async () => {
  await supabase.auth.signOut();
};

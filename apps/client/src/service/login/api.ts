import supabase from "@/utils/supabase/client";
import createClient from "@/utils/supabase/client";

export const signIn = async (provider: "google" | "github") => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "http://localhost:3000/auth",
    },
  });
  console.log(data, error);
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  return { error };
};

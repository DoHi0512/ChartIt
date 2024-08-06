import createClient from "@/utils/supabase/client";
const supabase = createClient();
export const signIn = async (provider: "google" | "github") => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "http://localhost:3000/auth",
    },
  });
  console.log(data, error);
};

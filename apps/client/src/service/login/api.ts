import createClient from "@/utils/supabase/client";

const supabase = createClient();
export const getLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "/",
    },
  });
  return { data, error };
};

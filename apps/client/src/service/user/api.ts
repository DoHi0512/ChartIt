import createClient from "@/utils/supabase/client";

const supabase = createClient();
export const getUser = async () => {
  const { data } = await supabase.auth.getUser();
  return { user: data.user };
};

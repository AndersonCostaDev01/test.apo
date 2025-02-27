/* eslint-disable @typescript-eslint/no-unused-vars */
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const createClient = (cookieStore: unknown) => {
  return createServerComponentClient({ cookies });
};

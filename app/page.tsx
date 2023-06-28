import { createClient } from "@supabase/supabase-js";

export default async function Index() {
  return (
    <div>
      Welcome! <a href="/resume"> Link to Resume</a>
    </div>
  )
}
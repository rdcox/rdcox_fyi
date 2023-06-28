import { createClient } from "@supabase/supabase-js";

export default async function Index() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div>
        <h1>Welcome!</h1>
      </div>
      <div>
        <a href="/resume">
          <button>Resume</button>
        </a>
      </div>
    </div>
  )
}
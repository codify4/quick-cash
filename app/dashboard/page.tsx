import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";


export default async function DashboardPage() {

  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/signin');
    
  return (
    <div>
      Dashboard
    </div>
  )
}

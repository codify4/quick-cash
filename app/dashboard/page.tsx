import Logout from "@/components/logout"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const supabase = await createClient();

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
        redirect('/signin');
    }
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <p>Hello, {user.email}</p>
                    <Logout />
                </div>
            </div>
        </div>
    )
}
export default Dashboard
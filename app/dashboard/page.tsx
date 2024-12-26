import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"

const Dashboard = async () => {
    const supabase = await createClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) {
        redirect('/signin')
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                </div>
                <div className="mt-4">
                    <p className="text-lg">Welcome back, {data.user.email}!</p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard
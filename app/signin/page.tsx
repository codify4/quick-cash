import { createClient } from "@/utils/supabase/server"
import { SigninForm } from "./components/signin-form"
import { redirect } from "next/navigation"

const LogInPage = async () => {
    const supabase = await createClient();

    const {data: { user }} = await supabase.auth.getUser();

    if(user) redirect('/dashboard');

    return (
        <div className="flex justify-center items-center h-screen">
            <SigninForm className="w-full max-w-md" />
        </div>
    )
}
export default LogInPage
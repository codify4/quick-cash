import { createClient } from "@/utils/supabase/server"
import { SigninForm } from "./components/signin-form"
import { redirect } from "next/navigation";

const LogInPage = async () => {

    const supabase = await createClient();

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) redirect('/dashboard')
        
    return (
        <div className="flex justify-center items-center h-screen">
            <SigninForm className="w-11/12 md:w-1/2 lg:w-1/3" />
        </div>
    )
}

export default LogInPage
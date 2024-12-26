import { logOut } from "@/actions/auth"
import Form from "next/form"
import { Button } from "./ui/button"

const Logout = () => {
  return (
    <Form action={
      async () => {
        'use server'
        await logOut()
      }
    }>
      <Button className="bg-primary hover:bg-primary/80 w-full py-5 rounded-lg flex items-center justify-center gap-2 text-white">Log Out</Button>
    </Form>
  )
}
export default Logout
import Logout from "@/components/logout"

const Dashboard = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <Logout />
                </div>
            </div>
        </div>
    )
}
export default Dashboard
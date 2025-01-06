import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewChart } from "./overview-chart"

const Overview = () => {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2">
                <Card className="lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Monthly Summary</CardTitle>
                        <CardDescription>Your spending this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">$2,450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            20.1% more than last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Yearly Overview</CardTitle>
                        <CardDescription>Your spending this year</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">$28,450.00</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Average $2,370.83 per month
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="w-full">
                <OverviewChart />
            </div>
        </>
    )
}
export default Overview
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewChart } from "./overview-chart"
import { useCurrency } from "@/hooks/use-currency"

const Overview = () => {
    const { formatCurrency } = useCurrency();

    return (
        <div className="flex flex-col w-full">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
                <Card className="w-full lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Monthly Summary</CardTitle>
                        <CardDescription>Your spending this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{formatCurrency(2450)}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            20.1% more than last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Yearly Overview</CardTitle>
                        <CardDescription>Your spending this year</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">{formatCurrency(2844)}</div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Average {formatCurrency(2370)} per month
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="w-full mt-4">
                <OverviewChart />
            </div>
        </div>
    )
}
export default Overview
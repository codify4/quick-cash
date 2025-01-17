"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import type { Expense } from "@/types/expenses"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface OverviewChartProps {
    expenses: Expense[]
}

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
]

const chartConfig = {
    expenses: {
        label: "Expenses",
        color: "hsl(var(--primary))",
    },
} satisfies ChartConfig

export function OverviewChart({ expenses }: OverviewChartProps) {
    // Group expenses by month
    const monthlyExpenses = months.map(month => {
        const monthIndex = months.indexOf(month)
        const monthExpenses = expenses.filter(expense => {
            const expenseDate = new Date(expense.created_at!)
            return expenseDate.getMonth() === monthIndex
        })
        const total = monthExpenses.reduce((sum, expense) => sum + expense.amount, 0)
        return { month, expenses: total }
    })

    return (
        <Card className="lg:hover:scale-105 transition-transform duration-300 rounded-xl">
            <CardHeader>
                <CardTitle>Expenses Chart</CardTitle>
                <CardDescription>January - December 2025</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[400px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={monthlyExpenses}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="expenses"
                            type="linear"
                            stroke="var(--color-expenses)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

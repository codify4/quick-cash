"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

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
const chartData = [
  { month: "January", expenses: 186 },
  { month: "February", expenses: 305 },
  { month: "March", expenses: 237 },
  { month: "April", expenses: 73 },
  { month: "May", expenses: 209 },
  { month: "June", expenses: 214 },
  { month: "July", expenses: 214 },
  { month: "August", expenses: 120 },
  { month: "September", expenses: 165 },
  { month: "October", expenses: 198 },
  { month: "November", expenses: 245 },
  { month: "December", expenses: 312 }
]

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export function OverviewChart() {
  return (
    <Card className="w-full lg:hover:scale-105 transition-transform duration-300 rounded-xl">
      <CardHeader>
        <CardTitle>Line Chart - Linear</CardTitle>
        <CardDescription>January - December 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
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

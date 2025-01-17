import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewChart } from "./overview-chart"
import { getExpenses } from "@/actions/expenses"
import { createClient } from "@/utils/supabase/server"
import type { Expense } from "@/types/expenses"
import { CurrencyDisplay } from "@/components/currency-display"


const Overview = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    const expenses: Expense[] = user ? await getExpenses(user.id) : []

    // Get current month's expenses
    const currentMonth = new Date().getMonth()
    const currentMonthExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.created_at!)
        return expenseDate.getMonth() === currentMonth
    })
    const currentMonthTotal = currentMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0)

    // Get last month's expenses for comparison
    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1
    const lastMonthExpenses = expenses.filter(expense => {
        const expenseDate = new Date(expense.created_at!)
        return expenseDate.getMonth() === lastMonth
    })
    const lastMonthTotal = lastMonthExpenses.reduce((sum, expense) => sum + expense.amount, 0)

    // Calculate percentage change
    const percentageChange = lastMonthTotal === 0 
        ? 100 
        : ((currentMonthTotal - lastMonthTotal) / lastMonthTotal) * 100

    // Calculate yearly stats
    const yearlyTotal = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const monthlyAverage = yearlyTotal / 12

    return (
        <div className="flex flex-col w-full">
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
                <Card className="w-full lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Monthly Summary</CardTitle>
                        <CardDescription>Your spending this month</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">
                            <CurrencyDisplay amount={currentMonthTotal} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            {Math.abs(percentageChange).toFixed(1)}% {percentageChange > 0 ? 'more' : 'less'} than last month
                        </p>
                    </CardContent>
                </Card>

                <Card className="w-full lg:hover:scale-105 transition-transform duration-300 rounded-xl">
                    <CardHeader>
                        <CardTitle>Yearly Overview</CardTitle>
                        <CardDescription>Your spending this year</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-3xl font-bold">
                            <CurrencyDisplay amount={yearlyTotal} />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                            Average <CurrencyDisplay amount={monthlyAverage} /> per month
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="w-full mt-4">
                <OverviewChart expenses={expenses} />
            </div>
        </div>
    )
}

export default Overview
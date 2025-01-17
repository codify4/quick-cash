import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ExpenseCard from "./expense-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AddExpense from "./add-expense"
import { getExpenses, type Period } from "@/actions/expenses"
import { createClient } from "@/utils/supabase/server"
import type { Expense } from "@/types/expenses"
import { CurrencyDisplay } from "@/components/currency-display"

const Categories = async () => {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    
    const expenses: Expense[] = user ? await getExpenses(user.id) : []

    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    const highestExpense = expenses.reduce((max, expense) => 
        expense.amount > max.amount ? expense : max, 
        expenses[0] || { name: "No expenses", amount: 0 }
    )

    return (
        <Card className="rounded-xl">
            <CardHeader>
                <div className="flex flex-col gap-y-4 lg:flex-row lg:items-center lg:justify-between w-full">
                    <div>
                        <CardTitle>Categories</CardTitle>
                        <CardDescription>This month's breakdown</CardDescription>
                    </div>
                    <AddExpense />
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex gap-4 w-full">
                    <form 
                        action={async (formData: FormData) => {
                            'use server'
                            const period = formData.get('period') as Period
                            if (!user) return []
                            return getExpenses(user.id, period)
                        }}
                        className="w-full"
                    >
                        <Select name="period" defaultValue="thisMonth">
                            <SelectTrigger>
                                <SelectValue placeholder="Select period" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="thisMonth">This Month</SelectItem>
                                <SelectItem value="lastMonth">Last Month</SelectItem>
                                <SelectItem value="last3Months">Last 3 Months</SelectItem>
                                <SelectItem value="thisYear">This Year</SelectItem>
                            </SelectContent>
                        </Select>
                    </form>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {expenses.map((expense) => (
                        <ExpenseCard 
                            key={expense.id}
                            id={expense.id}
                            name={expense.name}
                            description={expense.description}
                            amount={expense.amount}
                            category={expense.category}
                        />
                    ))}
                </div>

                <div className="pt-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Highest Expense</p>
                            <p className="font-medium">{highestExpense.name}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Average Expense</p>
                            <p className="font-medium">
                                <CurrencyDisplay amount={expenses.length > 0 ? (totalSpent / expenses.length).toFixed(2) : "0.00"} />
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Categories</p>
                            <p className="font-medium">{expenses.length}</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Categories
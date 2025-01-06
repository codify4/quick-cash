import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ExpenseCard from "./expense-card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AddExpense from "./add-expense"

const expenses = [
    { name: "Food & Dining", description: "Groceries, restaurants, and dining out", amount: 850, icon: "food" },
    { name: "Transportation", description: "Gas, public transit, and car maintenance", amount: 650, icon: "transportation" },
    { name: "Shopping", description: "Clothing, electronics, and personal items", amount: 450, icon: "shopping" },
    { name: "Utilities", description: "Electricity, water, and internet", amount: 350, icon: "utilities" },
    { name: "Entertainment", description: "Movies, games, and hobbies", amount: 150, icon: "entertainment" },
]

const Categories = () => {
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    
    return (
        <Card>
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
                <div className="flex gap-4">
                    <Select defaultValue="thisMonth">
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
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                    {expenses.map((expense, index) => (
                        <ExpenseCard 
                            key={index}
                            name={expense.name}
                            description={expense.description}
                            amount={expense.amount}
                            icon={expense.icon}
                        />
                    ))}
                </div>

                <div className="pt-4 border-t">
                    <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Highest Expense</p>
                            <p className="font-medium">Food & Dining</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-muted-foreground">Average Expense</p>
                            <p className="font-medium">${(totalSpent / expenses.length).toFixed(2)}</p>
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
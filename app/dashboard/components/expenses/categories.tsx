import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ExpenseCard from "../categories/expense-card"
import { ShoppingBag, Utensils, Car, Lightbulb, Gamepad } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AddExpense from "../categories/add-expense"

const expenses = [
    { name: "Food & Dining", description: "Groceries, restaurants, and dining out", amount: 850, icon: Utensils },
    { name: "Transportation", description: "Gas, public transit, and car maintenance", amount: 650, icon: Car },
    { name: "Shopping", description: "Clothing, electronics, and personal items", amount: 450, icon: ShoppingBag },
    { name: "Utilities", description: "Electricity, water, and internet", amount: 350, icon: Lightbulb },
    { name: "Entertainment", description: "Movies, games, and hobbies", amount: 150, icon: Gamepad },
]

const Categories = () => {
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)
    
    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
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

                {expenses.map((expense, index) => (
                    <ExpenseCard 
                        key={index}
                        name={expense.name}
                        description={expense.description}
                        amount={expense.amount}
                        icon={expense.icon}
                    />
                ))}

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
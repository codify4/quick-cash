import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Categories = () => {
  return (
    <Card>
        <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
            <CardDescription>This month's breakdown</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
            {[
                { category: "Food & Dining", amount: 850, percentage: 35 },
                { category: "Transportation", amount: 650, percentage: 26 },
                { category: "Shopping", amount: 450, percentage: 18 },
                { category: "Utilities", amount: 350, percentage: 14 },
                { category: "Entertainment", amount: 150, percentage: 7 },
            ].map((item, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">{item.category}</span>
                        <span>${item.amount}</span>
                    </div>
                    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                        <div 
                            className="h-full bg-primary" 
                            style={{ width: `${item.percentage}%` }}
                        />
                    </div>
                    <p className="text-sm text-muted-foreground">{item.percentage}% of total</p>
                </div>
            ))}
        </CardContent>
    </Card>
  )
}
export default Categories
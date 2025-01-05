import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Receipt } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const ExpensesPage = () => {
  return (
    <div className="container mx-auto py-6 space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-center text-center w-full lg:w-10/12 space-y-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex flex-row items-center">
              <Receipt size={24} className="mr-2" />
              Expenses
            </h1>
            <p className="text-muted-foreground">Track and manage your spending</p>
          </div>
          <Button className="bg-primary text-white">
            <Plus className="mr-2 h-4 w-4" />
            Add Expense
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full lg:w-10/12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="recent">Recent</TabsTrigger>
          <TabsTrigger value="categories">Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
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
            <Card>
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
        </TabsContent>

        <TabsContent value="recent" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your latest expenses</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[1,2,3].map((_, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                  <div className="space-y-1">
                    <p className="font-medium">Grocery Shopping</p>
                    <p className="text-sm text-muted-foreground">Today at 2:30 PM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">-$89.99</p>
                    <p className="text-sm text-muted-foreground">Food</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
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
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ExpensesPage
import { Receipt } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Overview from "../../components/expenses/overview"
import Categories from "../../components/expenses/categories/categories"

const ExpensesPage = async () => {

  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-start w-full lg:w-10/12">
        <h1 className="text-3xl font-bold tracking-tight flex flex-row items-center">
          <Receipt size={24} className="mr-2" />
          Expenses
        </h1>
        <p className="text-muted-foreground">Track and manage your spending</p>
      </div>

      <Tabs defaultValue="overview" className="w-full lg:w-10/12">
        <TabsList className="flex w-full rounded-xl">
          <TabsTrigger value="overview" className="w-1/2 rounded-lg">Overview</TabsTrigger>
          <TabsTrigger value="categories" className="w-1/2 rounded-lg">Categories</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4 w-[393px] md:w-[735px] lg:w-full">
          <Overview />
        </TabsContent>

        <TabsContent value="categories" className="space-y-4">
          <Categories />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ExpensesPage
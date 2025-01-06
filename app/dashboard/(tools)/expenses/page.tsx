import { Receipt } from "lucide-react"
import Overview from "../../components/expenses/overview"
import Categories from "../../components/expenses/categories/categories"
import Tabber from "../../components/tabber"

const expenseTabs = [
  { label: "Overview", value: "overview", icon: "Receipt", content: <Overview /> },
  { label: "Categories", value: "categories", icon: "PieChart", content: <Categories /> },
]

const ExpensesPage = () => {
  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-start w-full lg:w-10/12">
        <h1 className="text-3xl font-bold tracking-tight flex flex-row items-center">
          <Receipt size={24} className="mr-2" />
          Expenses
        </h1>
        <p className="text-muted-foreground">Track and manage your spending</p>
      </div>

      <Tabber
        className="w-full lg:w-10/12 mt-5 mb-0"
        tabs={expenseTabs}
      />
    </div>
  )
}

export default ExpensesPage
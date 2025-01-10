import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import AddLoan from "../../components/loans/add-loan"
import { LoanCard } from "../../components/loans/loan-card"
import { LoansOverview } from "../../components/loans/loans-overview"
import { dummyLoans } from "@/constants/loans"
import { delay } from "@/lib/utils"
import { Wallet } from "lucide-react"

export default async function LoansPage() {

  await delay(2000);
  const loans = dummyLoans;
  const activeLoans = loans.filter(loan => loan.status === 'Active');
  const totalDisbursed = loans.reduce((sum, loan) => sum + Number(loan.total_amount), 0);
  const pendingLoans = loans.filter(loan => loan.status === 'Pending');

  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full lg:w-10/12">
        <div>
          <h2 className="flex flex-row items-center text-3xl font-bold tracking-tight">
            <Wallet size={24} className="mr-2"/>
            Loans
          </h2>
          <p className="text-muted-foreground">
            Manage and view all loan applications and their status
          </p>
        </div>
        <AddLoan />
      </div>

      <div className="space-y-4 w-full lg:w-10/12">
        <LoansOverview 
          activeLoansCount={activeLoans.length}
          totalDisbursed={totalDisbursed}
          pendingLoansCount={pendingLoans.length}
        />

        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>All Loans</CardTitle>
            <CardDescription>
              A list of all loans and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Input placeholder="Search by name..." className="flex rounded-lg" />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px] rounded-lg">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Defaulted">Defaulted</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {loans && loans.length > 0 ? (
                loans.map((loan) => (
                  <LoanCard key={loan.id} loan={loan} />
                ))
              ) : (
                <div className="col-span-full text-center py-6 text-muted-foreground">
                  No loans found.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
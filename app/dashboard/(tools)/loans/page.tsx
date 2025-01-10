import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AddLoan from "../../components/loans/add-loan"

const dummyLoans = [
  {
    id: '1',
    name: 'Home Renovation Loan',
    total_amount: '25000.00',
    monthly_installment: '2250.00',
    remaining_balance: '18750.00',
    next_due_date: '2025-02-01',
    status: 'Active',
    start_date: '2024-12-01'
  },
  {
    id: '2',
    name: 'Business Expansion',
    total_amount: '50000.00',
    monthly_installment: '4500.00',
    remaining_balance: '45000.00',
    next_due_date: '2025-02-15',
    status: 'Active',
    start_date: '2024-12-15'
  },
  {
    id: '3',
    name: 'Car Loan',
    total_amount: '15000.00',
    monthly_installment: '1250.00',
    remaining_balance: '0.00',
    next_due_date: null,
    status: 'Completed',
    start_date: '2024-06-01'
  },
  {
    id: '4',
    name: 'Education Loan',
    total_amount: '35000.00',
    monthly_installment: '3000.00',
    remaining_balance: '35000.00',
    next_due_date: '2025-02-01',
    status: 'Pending',
    start_date: '2025-01-01'
  }
]

export default function LoansPage() {
  const loans = dummyLoans
  const activeLoans = loans.filter(loan => loan.status === 'Active')
  const totalDisbursed = loans.reduce((sum, loan) => sum + Number(loan.total_amount), 0)
  const pendingLoans = loans.filter(loan => loan.status === 'Pending')

  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full lg:w-10/12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Loans</h2>
          <p className="text-muted-foreground">
            Manage and view all loan applications and their status
          </p>
        </div>
        <AddLoan />
      </div>

      <div className="space-y-4 w-full lg:w-10/12">
        <Card>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
            <CardDescription>
              Quick overview of loan statistics
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Active Loans
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeLoans.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Amount Disbursed
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalDisbursed}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Pending Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{pendingLoans.length}</div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>All Loans</CardTitle>
            <CardDescription>
              A list of all loans and their current status
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <Input placeholder="Search by name..." className="flex" />
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {loans && loans.length > 0 ? (
                loans.map((loan) => (
                  <Card key={loan.id} className="relative overflow-hidden group rounded-2xl">
                    <div className="absolute top-0 left-0 w-full h-1.5">
                      <Progress 
                        value={((Number(loan.total_amount) - Number(loan.remaining_balance)) / Number(loan.total_amount)) * 100} 
                        className="h-full rounded-none bg-muted"
                      />
                    </div>
                    <div className="p-6 pt-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="font-semibold text-lg tracking-tight">{loan.name}</h3>
                        <Badge 
                          variant={loan.status === 'Active' ? 'destructive' : 
                                 loan.status === 'Completed' ? 'default' :
                                 'secondary'}
                          className={`rounded-full font-medium ${loan.status === 'Pending' ? 'text-black' : 'text-white'}`}
                        >
                          {loan.status}
                        </Badge>
                      </div>

                      <div className="space-y-1 mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold tracking-tight">${Number(loan.total_amount).toLocaleString()}</span>
                          <span className="text-muted-foreground text-sm">total amount</span>
                        </div>
                        <div className="text-muted-foreground text-sm">
                          ${Number(loan.remaining_balance).toLocaleString()} remaining
                        </div>
                      </div>

                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="w-full group/button hover:bg-accent"
                          >
                            <div className="flex-1 text-left space-y-0.5">
                              <div className="text-sm font-medium">Next Payment</div>
                              <div className="text-muted-foreground text-sm">
                                {loan.next_due_date ? new Date(loan.next_due_date).toLocaleDateString(undefined, { 
                                  month: 'short', 
                                  day: 'numeric',
                                  year: 'numeric'
                                }) : 'N/A'}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-11/12 rounded-2xl">
                          <DialogHeader>
                            <DialogTitle className="text-xl font-semibold tracking-tight">{loan.name}</DialogTitle>
                            <DialogDescription>
                              Complete loan details and payment information
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-8 pt-4">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Total Amount</p>
                                <p className="text-lg font-semibold tracking-tight">
                                  ${Number(loan.total_amount).toLocaleString()}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Monthly Payment</p>
                                <p className="text-lg font-semibold tracking-tight">
                                  ${Number(loan.monthly_installment).toLocaleString()}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Remaining</p>
                                <p className="text-lg font-semibold tracking-tight">
                                  ${Number(loan.remaining_balance).toLocaleString()}
                                </p>
                              </div>
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Start Date</p>
                                <p className="text-lg font-semibold tracking-tight">
                                  {new Date(loan.start_date).toLocaleDateString(undefined, {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                  })}
                                </p>
                              </div>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-muted-foreground">Payment Progress</span>
                                <span className="font-medium">
                                  {((Number(loan.total_amount) - Number(loan.remaining_balance)) / Number(loan.total_amount) * 100).toFixed(0)}%
                                </span>
                              </div>
                              <Progress 
                                value={((Number(loan.total_amount) - Number(loan.remaining_balance)) / Number(loan.total_amount)) * 100} 
                                className="h-2"
                              />
                              <p className="text-xs text-muted-foreground">
                                ${(Number(loan.total_amount) - Number(loan.remaining_balance)).toLocaleString()} paid of ${Number(loan.total_amount).toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
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
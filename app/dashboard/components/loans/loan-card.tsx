import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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

type Loan = {
  id: string
  name: string
  total_amount: string
  monthly_installment: string
  remaining_balance: string
  next_due_date: string | null
  status: string
  start_date: string
}

type LoanCardProps = {
  loan: Loan
}

export function LoanCard({ loan }: LoanCardProps) {
  return (
    <Card className="relative overflow-hidden group rounded-2xl hover:scale-105 transition-transform duration-300">
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
              className="w-full hover:bg-accent py-6 rounded-lg"
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
  )
}

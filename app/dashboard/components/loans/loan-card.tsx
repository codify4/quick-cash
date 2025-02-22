"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"
import type { Loan } from "@/types/loans"
import { ArrowRight, MoreHorizontal } from "lucide-react"
import DeleteLoan from "./delete-loan"
import { useState } from "react"
import EditLoan from "./edit-loan"
import { createClient } from "@/utils/supabase/client"

type LoanCardProps = {
  loan: Loan
}

export function LoanCard({ loan }: LoanCardProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [status, setStatus] = useState<typeof loan.status>(loan.status)
  const [paidAmount, setPaidAmout] = useState<number>(loan.paid_amount || 0)

  const interestAmount = (loan.total_amount * loan.interest_rate) / 100
  const totalAmountWithInterest = loan.total_amount + interestAmount
  const progress = (paidAmount / totalAmountWithInterest) * 100

  const handlePayment = async () => {
    try {
      const supabase = createClient()

      const newPayment = {
        loan_id: loan.id,
        amount: Number(loan.monthly_installment),
      }

      // 1️⃣ Insert a new payment into the payments table
      const { error: paymentError } = await supabase.from("payments").insert([newPayment])

      if (paymentError) {
        throw new Error(`Error adding payment: ${paymentError.message}`)
      }

      // 2️⃣ Update paid_amount in the loans table
      const updatedPaidAmount = (paidAmount || 0) + Number(loan.monthly_installment)
      const newStatus = updatedPaidAmount >= totalAmountWithInterest ? "Completed" : loan.status

      const { error: loanError } = await supabase
        .from("loans")
        .update({ paid_amount: updatedPaidAmount, status: newStatus })
        .eq("id", loan.id)

      if (loanError) {
        throw new Error(`Error updating loan: ${loanError.message}`)
      }

      // 3️⃣ Update local state to reflect the new paid amount and status
      setPaidAmout(updatedPaidAmount)
      setStatus(newStatus)
    } catch (error) {
      console.error("Error in handlePayment:", error)
    }
  }

  return (
    <Card className="relative overflow-hidden group rounded-2xl">
      <div className="absolute top-0 left-0 w-full h-1.5">
        <Progress value={progress} className="h-full rounded-none bg-muted" />
      </div>
      <div className="p-6 pt-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-lg tracking-tight">{loan.name}</h3>
          <div className="flex items-center gap-2">
            <Badge
              variant={status === "Active" ? "destructive" : status === "Completed" ? "default" : "secondary"}
              className={`rounded-full font-medium ${status === "Pending" ? "text-black" : "text-white"}`}
            >
              {status}
            </Badge>
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 lg:opacity-0 group-hover:opacity-100 transition-opacity -mr-2"
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[160px] rounded-lg">
                <DropdownMenuItem className="gap-2 cursor-pointer" onSelect={(e) => e.preventDefault()}>
                  <EditLoan id={loan.id!} initialData={loan} onClose={() => setDropdownOpen(false)} />
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2 text-primary cursor-pointer" onSelect={(e) => e.preventDefault()}>
                  <DeleteLoan id={loan.id} onClose={() => setDropdownOpen(false)} />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold tracking-tight">${Number(loan.total_amount).toLocaleString()}</span>
            <span className="text-muted-foreground text-sm">total amount</span>
          </div>
          <div className="text-muted-foreground text-sm">
            ${Number(loan.monthly_installment).toLocaleString()} monthly payment
          </div>
        </div>

        {/* <Button onClick={handlePayment} className="w-full mt-4 text-white rounded-xl mb-2">
          Mark Installment as Paid
        </Button> */}

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="w-full hover:bg-accent py-6 rounded-lg">
              <div className="flex-1 text-left space-y-0.5">More Details</div>
              <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </DialogTrigger>
          <DialogContent className="w-11/12 rounded-2xl">
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold tracking-tight">{loan.name}</DialogTitle>
              <DialogDescription>Complete loan details and payment information</DialogDescription>
            </DialogHeader>
            <div className="space-y-8 pt-4">
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Total Amount</p>
                  <p className="text-lg font-semibold tracking-tight">${Number(loan.total_amount).toLocaleString()}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="text-lg font-semibold tracking-tight">{loan.duration} months</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Start Date</p>
                  <p className="text-lg font-semibold tracking-tight">{loan.start_date}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Monthly Payment</p>
                  <p className="text-lg font-semibold tracking-tight">
                    ${Number(loan.monthly_installment).toLocaleString()}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Interest Rate</p>
                  <p className="text-lg font-semibold tracking-tight">{loan.interest_rate}%</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Payment Progress</span>
                  <span className="font-medium">{progress.toFixed(0)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  ${paidAmount.toLocaleString()} paid of ${Number(totalAmountWithInterest).toLocaleString()}
                </p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Card>
  )
}


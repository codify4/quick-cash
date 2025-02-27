"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Calendar as CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { createLoan } from "@/actions/loans"
import { useState } from "react"
import { useUser } from "@/hooks/use-user"
import { Loan } from "@/types/loans"

export default function AddLoan() {
  const { user } = useUser();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  const handleSubmit = async (formData: FormData) => {

    if (!user) return;

    const loan: Loan = {
      name: formData.get('name') as string,
      total_amount: parseFloat(formData.get('total_amount') as string || '0'),
      monthly_installment: parseFloat(formData.get('monthly_installment') as string || '0').toString(),
      duration: parseInt(formData.get('duration') as string),
      interest_rate: parseFloat(formData.get('interest_rate') as string || '0'),
      paid_amount: parseFloat(formData.get('paid_amount') as string || '0'),
      start_date: date?.toISOString() ?? "",
      status: formData.get('status') as string,
      user_id: user.id
    }
    await createLoan(loan);

    setOpen(false);
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white rounded-lg w-full md:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          New Loan
        </Button>
      </DialogTrigger>
      <DialogContent className="w-11/12 max-w-[500px] rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold tracking-tight">Add New Loan</DialogTitle>
          <DialogDescription>
            Enter the details for your new loan
          </DialogDescription>
        </DialogHeader>
        <form action={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Loan Name</Label>
                <Input
                  name="name"
                  id="name"
                  placeholder="e.g., Home Loan"
                  autoComplete="off"
                  className="rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="total_amount">Total Amount</Label>
                  <div>
                    <Input
                      name="total_amount"
                      id="total_amount"
                      placeholder="$0.00"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="total_amount">Paid Amount</Label>
                  <div>
                    <Input
                      name="paid_amount"
                      id="paid_amount"
                      placeholder="$0.00"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="monthly_installment">Monthly Payment</Label>
                  <div>
                    <Input
                      name="monthly_installment"
                      id="monthly_installment"
                      placeholder="$0.00"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Duration (months)</Label>
                  <div>
                    <Input
                      name="duration"
                      id="duration"
                      placeholder="12"
                      className="rounded-lg"
                    />
                  </div>
                </div>

              </div>
              <div className="space-y-2">
                <Label htmlFor="interest_rate">Interest Rate (%)</Label>
                <Input 
                  name="interest_rate" 
                  id="interest_rate" 
                  placeholder="6" 
                  className="rounded-lg" 
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal rounded-lg",
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 rounded-lg" align="start">
                      <Calendar
                        mode="single"
                        initialFocus
                        selected={date}
                        onSelect={setDate}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select name="status" defaultValue="Active">
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="rounded-lg">
                      <SelectItem value="Active">Active</SelectItem>
                      <SelectItem value="Pending">Pending</SelectItem>
                      <SelectItem value="Completed">Completed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <DialogTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DialogTrigger>
              <Button type="submit" className="bg-primary text-white">Add Loan</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
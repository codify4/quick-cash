"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { updateLoan } from "@/actions/loans"
import { useState } from "react"
import { Pencil, Calendar as CalendarIcon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

interface EditLoanProps {
    id: string
    initialData: {
        name: string
        total_amount: string
        monthly_installment: string
        duration: number
        interest_rate: number
        start_date: string
        status: string
    }
    onClose?: () => void
}

function EditLoan({ id, initialData, onClose }: EditLoanProps) {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState<Date | undefined>(new Date(initialData.start_date))

    const editLoan = async (formData: FormData) => {
        await updateLoan(id, {
            name: formData.get('name') as string,
            total_amount: parseFloat(formData.get('total_amount') as string).toString(),
            monthly_installment: parseFloat(formData.get('monthly_installment') as string).toString(),
            duration: parseInt(formData.get('duration') as string),
            interest_rate: parseFloat(formData.get('interest_rate') as string),
            start_date: date?.toISOString() ?? "",
            status: formData.get('status') as string,
        })
        setOpen(false)
        onClose?.()
    }

    return (
        <Dialog open={open} onOpenChange={(value) => {
            setOpen(value)
            if (!value) onClose?.()
        }}>
            <DialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <Pencil className="h-4 w-4" />
                    Edit
                </div>
            </DialogTrigger>
            <DialogContent className="w-11/12 max-w-[500px] rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold tracking-tight">
                        Edit this Loan
                    </DialogTitle>
                </DialogHeader>
                <form action={editLoan} className="space-y-4 select-none">
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Loan Name</Label>
                            <Input 
                                name="name"
                                placeholder="e.g., Home Loan"
                                required
                                autoComplete="off"
                                defaultValue={initialData.name}
                                className="rounded-lg"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Total Amount</Label>
                                <Input 
                                    name="total_amount"
                                    placeholder="$0.00"
                                    type="number"
                                    step="0.01"
                                    min={0}
                                    required
                                    autoComplete="off"
                                    defaultValue={initialData.total_amount}
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Monthly Payment</Label>
                                <Input 
                                    name="monthly_installment"
                                    placeholder="$0.00"
                                    type="number"
                                    step="0.01"
                                    min={0}
                                    required
                                    autoComplete="off"
                                    defaultValue={initialData.monthly_installment}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Duration (months)</Label>
                                <Input 
                                    name="duration"
                                    placeholder="12"
                                    type="number"
                                    min={1}
                                    required
                                    autoComplete="off"
                                    defaultValue={initialData.duration}
                                    className="rounded-lg"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Interest Rate (%)</Label>
                                <Input 
                                    name="interest_rate"
                                    placeholder="5.5"
                                    type="number"
                                    step="0.1"
                                    min={0}
                                    required
                                    autoComplete="off"
                                    defaultValue={initialData.interest_rate}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Start Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal rounded-lg",
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0 rounded-lg" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            className="rounded-xl"
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="space-y-2">
                                <Label className="text-sm font-medium">Status</Label>
                                <Select name="status" defaultValue={initialData.status}>
                                    <SelectTrigger className="rounded-lg">
                                        <SelectValue placeholder="Select status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Active">Active</SelectItem>
                                        <SelectItem value="Pending">Pending</SelectItem>
                                        <SelectItem value="Completed">Completed</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button type="submit" className="bg-primary text-white rounded-lg">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditLoan

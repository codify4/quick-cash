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
import { updateExpense } from "@/actions/expenses"
import { useState } from "react"
import { Pencil } from "lucide-react"
import { icons } from "@/constants/icons"
import { Label } from "@/components/ui/label"

interface EditExpenseProps {
    id: number
    initialData: {
        name: string
        description: string
        amount: number
        category: string
    }
}

function EditExpense({ id, initialData }: EditExpenseProps) {

    const editExpense = async (formData: FormData) => {
        await updateExpense(id, {
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            amount: parseFloat(formData.get('amount') as string),
            category: formData.get('category') as string,
        })
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => e.stopPropagation()}>
                    <Pencil className="h-4 w-4" />
                    Edit
                </div>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl" onClick={(e) => e.stopPropagation()}>
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold tracking-tight">
                        Edit this Expense
                    </DialogTitle>
                </DialogHeader>
                <form action={editExpense} className="space-y-4" onClick={(e) => e.stopPropagation()}>
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Name</Label>
                            <Input 
                                name="name"
                                placeholder="Groceries"
                                required
                                autoComplete="off"
                                defaultValue={initialData.name}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Description</Label>
                            <Input 
                                name="description"
                                placeholder="Weekly grocery shopping"
                                required
                                autoComplete="off"
                                defaultValue={initialData.description}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Amount</Label>
                            <Input 
                                name="amount"
                                placeholder="99.99" 
                                type="number" 
                                step="0.01"
                                min={0}
                                required
                                autoComplete="off"
                                defaultValue={initialData.amount}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label className="text-sm font-medium">Category</Label>
                            <Select name="category" required defaultValue={initialData.category}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {icons.map((item, index) => (
                                        <SelectItem key={index} value={item.label.toLowerCase()}>
                                            <div className="flex items-center gap-2">
                                                <item.icon className="h-4 w-4" />
                                                <span>{item.label.charAt(0).toUpperCase() + item.label.slice(1)}</span>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex items-center justify-end w-full space-x-2">
                        <Button type="submit" className="w-full text-white bg-primary/80 rounded-lg">
                            Save Changes
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default EditExpense
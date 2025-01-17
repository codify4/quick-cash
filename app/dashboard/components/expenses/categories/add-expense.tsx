"use client"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogFooter,
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

import { insertExpense } from "@/actions/expenses"
import { useState } from "react"
import { useUser } from "@/hooks/use-user"
import { Plus } from "lucide-react"
import { icons } from "@/constants/icons"

function AddExpense() {
    const { user } = useUser();
    const [open, setOpen] = useState(false);

    const addExpense = async (formData: FormData) => {
        if (!user) return;
        
        await insertExpense({
            name: formData.get('name') as string,
            description: formData.get('description') as string,
            amount: parseFloat(formData.get('amount') as string),
            category: formData.get('category') as string,
            user_id: user.id
        });
        
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary text-white rounded-lg w-full lg:w-auto">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Expense
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12 rounded-2xl">
                <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                </DialogHeader>
                <form action={addExpense} className="space-y-4">
                    <div className="space-y-4 py-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Name</label>
                            <Input 
                                name="name"
                                placeholder="Groceries"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Description</label>
                            <Input 
                                name="description"
                                placeholder="Weekly grocery shopping"
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Amount</label>
                            <Input 
                                name="amount"
                                placeholder="99.99" 
                                type="number" 
                                step="0.01"
                                min={0}
                                required
                                autoComplete="off"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Category</label>
                            <Select name="category" required>
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
                    <DialogFooter>
                        <Button type="submit" className="bg-primary text-white hover:bg-primary/90">
                            Add Expense
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default AddExpense
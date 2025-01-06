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
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { 
    ShoppingBag, 
    Utensils, 
    Car, 
    Lightbulb, 
    Gamepad, 
    Plane,
    Home,
    Gift,
    Coffee,
    Heart
} from "lucide-react"

const icons = [
    { icon: ShoppingBag, label: "Shopping Bag" },
    { icon: Utensils, label: "Food" },
    { icon: Car, label: "Transportation" },
    { icon: Lightbulb, label: "Utilities" },
    { icon: Gamepad, label: "Entertainment" },
    { icon: Plane, label: "Travel" },
    { icon: Home, label: "Home" },
    { icon: Gift, label: "Gifts" },
    { icon: Coffee, label: "Coffee" },
    { icon: Heart, label: "Health" },
]

export function AddExpense() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary text-white rounded-lg w-full lg:w-auto">
                    Add Expense
                </Button>
            </DialogTrigger>
            <DialogContent className="w-11/12">
                <DialogHeader>
                    <DialogTitle>Add New Expense</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 py-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Name</label>
                        <Input placeholder="Groceries" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <Textarea 
                            placeholder="Weekly grocery shopping at Walmart"
                            className="resize-none"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Amount</label>
                        <Input 
                            placeholder="99.99" 
                            type="number" 
                            step="0.01"
                            min={0}
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium">Icon</label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an icon" />
                            </SelectTrigger>
                            <SelectContent>
                                {icons.map((item, index) => (
                                    <SelectItem key={index} value={item.label.toLowerCase()}>
                                        <div className="flex items-center gap-2">
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.label}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="text-white rounded-lg">Add Expense</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default AddExpense
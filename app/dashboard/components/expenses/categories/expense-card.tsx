"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useCurrency } from "@/hooks/use-currency"
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
    Heart,
    LucideIcon,
    MoreHorizontal,
    Pencil,
    Trash2
} from "lucide-react"

const icons: Record<string, LucideIcon> = {
    shopping: ShoppingBag,
    food: Utensils,
    transportation: Car,
    utilities: Lightbulb,
    entertainment: Gamepad,
    travel: Plane,
    home: Home,
    gifts: Gift,
    coffee: Coffee,
    health: Heart
}

interface ExpenseCardProps {
    name: string
    description: string
    amount: number
    icon: string
}

const ExpenseCard = ({ name, description, amount, icon }: ExpenseCardProps) => {
    const { formatCurrency } = useCurrency()
    const Icon = icons[icon] || ShoppingBag

    return (
        <Card className="p-6 lg:hover:scale-105 rounded-xl hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold">
                            {formatCurrency(amount)}
                        </span>
                        <DropdownMenu>
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
                                <DropdownMenuItem className="gap-2 cursor-pointer">
                                    <Pencil className="h-4 w-4" />
                                    Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 text-primary cursor-pointer">
                                    <Trash2 className="h-4 w-4" />
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <h3 className="font-medium text-base">{name}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                </div>
            </div>
        </Card>
    )
}

export default ExpenseCard
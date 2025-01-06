"use client"

import { Card } from "@/components/ui/card"
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
    LucideIcon
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
                    <span className="text-lg font-semibold">
                        {formatCurrency(amount)}
                    </span>
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
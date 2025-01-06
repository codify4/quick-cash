import { Card } from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface ExpenseCardProps {
    name: string
    description: string
    amount: number
    icon: LucideIcon
}

const ExpenseCard = ({ name, description, amount, icon: Icon }: ExpenseCardProps) => {
    return (
        <Card className="p-6 lg:hover:scale-105 rounded-xl hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <div className="flex flex-col space-y-4">
                <div className="flex justify-between items-start">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-lg font-semibold">
                        ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
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
        <Card className="p-4 hover:shadow-lg transition-all duration-200 cursor-pointer group">
            <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                        <h3 className="font-medium text-sm">{name}</h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                    </div>
                </div>
                <p className="font-semibold">
                    ${amount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </p>
            </div>
        </Card>
    )
}

export default ExpenseCard
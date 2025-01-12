import { Button } from "@/components/ui/button"
import { Plus, Bell, CreditCard, CalendarDays, MoreHorizontal, Pencil, Trash2, Repeat } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Subscription = {
  id: number
  subscription_name: string
  service_provider: string
  amount: number
  billing_cycle: string
  payment_method: string
  next_billing_date: string
  active: boolean
  reminder: boolean
  icon: any
}

type SubCardProps = {
    subscription: Subscription
  }
  

const SubscriptionCard = ({ subscription }: SubCardProps) => {
    return (
        <Card
            className="group relative rounded-2xl hover:scale-105 transition-transform duration-300"
        >
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                        <div className={"flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-background"}>
                            <subscription.icon className="h-8 w-8" />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className="font-medium">
                                    {subscription.subscription_name}
                                </h3>
                                {subscription.reminder && (
                                    <Bell className="h-3.5 w-3.5 text-primary" />
                                )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {subscription.service_provider}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className="text-2xl font-semibold">
                                    ${subscription.amount}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                    /{subscription.billing_cycle.toLowerCase()}
                                </span>
                            </div>
                        </div>
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 -mt-1">
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

                <div className="mt-6 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5">
                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">
                                {subscription.payment_method}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CalendarDays className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">
                            {subscription.next_billing_date}
                        </span>
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Status
                        </span>
                        <span className={`text-sm font-medium ${
                            subscription.active ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                            {subscription.active ? 'Active' : 'Inactive'}
                        </span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
export default SubscriptionCard
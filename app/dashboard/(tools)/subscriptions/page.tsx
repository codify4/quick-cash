"use client"

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
import { subscriptions } from "@/constants/subscriptions"


export default function SubscriptionsPage() {
  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col lg:flex-row gap-5 items-center justify-between w-full lg:w-10/12">
        <div>
          <h2 className="flex flex-row items-center text-3xl font-bold tracking-tight">
            <Repeat size={24} className="mr-2" />
            Subscriptions
          </h2>
          <p className="text-muted-foreground">
            Manage and view all subscription plans and their status
          </p>
        </div>
        <Button className="text-white w-full sm:w-auto rounded-lg">
          <Plus className="mr-2 h-4 w-4" />
          New Subscription
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-10/12">
        {subscriptions.map((subscription) => (
          <Card 
            key={subscription.id} 
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
                  <DropdownMenuContent align="start" className="w-[160px]">
                    <DropdownMenuItem className="gap-2">
                      <Pencil className="h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem className="gap-2 text-primary">
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
        ))}
      </div>
    </div>
  )
}
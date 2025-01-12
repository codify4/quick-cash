import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Subscription } from "../../../../../constants/data"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={false}
        onCheckedChange={(value) => console.log(value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={false}
        onCheckedChange={(value) => console.log(value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "subscription_name",
    header: "Subscription",
    cell: ({ row }) => {
      const subscription = row.original as Subscription
      return (
        <div className="flex flex-col">
          <span className="font-medium">{subscription.subscription_name}</span>
          <span className="text-sm text-muted-foreground">
            {subscription.service_provider}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const subscription = row.original as Subscription
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(subscription.amount)
      return (
        <div className="flex flex-col">
          <span className="font-medium">{formatted}</span>
          <span className="text-sm text-muted-foreground">
            {subscription.billing_cycle}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "next_billing_date",
    header: "Next Billing",
    cell: ({ row }) => {
      const subscription = row.original as Subscription
      return <div>{new Date(subscription.next_billing_date).toLocaleDateString()}</div>
    },
  },
  {
    accessorKey: "payment_method",
    header: "Payment Method",
  },
  {
    accessorKey: "active",
    header: "Status",
    cell: ({ row }) => {
      const subscription = row.original as Subscription
      return (
        <Badge variant={subscription.active ? "success" : "destructive"}>
          {subscription.active ? "Active" : "Inactive"}
        </Badge>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit subscription</DropdownMenuItem>
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem className="text-destructive">
              Cancel subscription
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

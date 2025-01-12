"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const subscriptions = [
  {
    id: 1,
    name: "Netflix Premium",
    amount: 19.99,
    status: "Active",
    nextBilling: "Feb 12, 2025",
  },
  {
    id: 2,
    name: "Spotify Family",
    amount: 14.99,
    status: "Active",
    nextBilling: "Feb 15, 2025",
  },
  {
    id: 3,
    name: "Amazon Prime",
    amount: 139.99,
    status: "Active",
    nextBilling: "Jan 10, 2026",
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Subscriptions</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Next Billing</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptions.map((subscription) => (
              <TableRow key={subscription.id}>
                <TableCell className="font-medium">{subscription.name}</TableCell>
                <TableCell>${subscription.amount}</TableCell>
                <TableCell>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-700">
                    {subscription.status}
                  </span>
                </TableCell>
                <TableCell>{subscription.nextBilling}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
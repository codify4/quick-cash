import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OverviewCard } from "./overview-card"

type LoansOverviewProps = {
  activeLoansCount: number,
  totalDisbursed: number,
  pendingLoansCount: number
}

export function LoansOverview({ activeLoansCount, totalDisbursed, pendingLoansCount }: LoansOverviewProps) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Overview</CardTitle>
        <CardDescription>
          Quick overview of loan statistics
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6 md:grid-cols-3">
        <OverviewCard 
          title="Total Active Loans"
          value={activeLoansCount}
        />
        <OverviewCard 
          title="Total Amount Disbursed"
          value={`$${totalDisbursed.toLocaleString()}`}
        />
        <OverviewCard 
          title="Pending Applications"
          value={pendingLoansCount}
        />
      </CardContent>
    </Card>
  )
}

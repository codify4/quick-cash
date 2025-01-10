import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type OverviewCardProps = {
  title: string,
  value: string | number
}

export function OverviewCard({ title, value }: OverviewCardProps) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

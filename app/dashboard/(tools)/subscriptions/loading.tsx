import { Repeat } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

export default function SubscriptionsLoading() {
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
        <Skeleton className="h-10 w-[180px]" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 w-full lg:w-10/12">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-4 w-[100px]" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-6 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-9 w-[100px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

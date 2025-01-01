import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingPayments() {
  return (
    <div className="space-y-6 w-full">
      <div className="space-y-2">
        <Skeleton className="h-8 w-[500px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>
      <div className="grid grid-cols-3 gap-4 w-full">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-[300px] w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}

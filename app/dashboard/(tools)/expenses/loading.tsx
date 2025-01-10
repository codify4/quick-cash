import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoadingExpenses() {
  return (
    <div className="container mx-auto space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-start w-full lg:w-10/12">
        <div className="flex flex-row items-center">
          <Skeleton className="h-6 w-6 mr-2" />
          <Skeleton className="h-8 w-[150px]" />
        </div>
        <Skeleton className="h-4 w-[250px] mt-1" />
      </div>

      <div className="w-full lg:w-10/12">
        <Skeleton className="h-10 w-full rounded-xl mb-4" />

        <div className="space-y-4">
          <div className="space-y-4 w-[393px] sm:w-[480px] lg:w-full">
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, i) => (
                <Skeleton key={i} className="h-[200px] rounded-2xl" />
              ))}
            </div>
            <Skeleton className="h-[400px] w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

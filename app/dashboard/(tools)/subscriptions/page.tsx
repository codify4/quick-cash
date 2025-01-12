import { Repeat } from "lucide-react"
import { subscriptions } from "@/constants/subscriptions"
import { AddSubscription } from "@/app/dashboard/components/subs/add-sub"
import SubscriptionCard from "../../components/subs/sub-card"
import { delay } from "@/lib/utils"

export default async function SubscriptionsPage() {
  await delay(2000)
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
        <AddSubscription />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 w-full lg:w-10/12">
        {subscriptions.map((subscription) => (
          <SubscriptionCard key={subscription.id} subscription={subscription} />
        ))}
      </div>
    </div>
  )
}
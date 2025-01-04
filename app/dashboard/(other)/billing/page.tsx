import { PricingCard } from "@/app/dashboard/components/pricing-card"

const plans = [
    {
        name: "Free Plan",
        description: "Perfect for getting started",
        price: 0,
        features: [
            "Up to 50 transactions per month",
            "Basic expense tracking",
            "Email support",
            "1 user account",
        ],
    },
    {
        name: "Pro Plan",
        description: "Best for personal finance",
        price: 9.99,
        features: [
            "Unlimited transactions",
            "Advanced expense tracking",
            "Priority support",
            "Custom categories",
            "Data export",
            "Up to 3 user accounts",
            "Bill reminders",
        ],
        popular: true
    },
    {
        name: "Business Plan",
        description: "For teams and businesses",
        price: 29.99,
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Unlimited user accounts",
            "API access",
            "Custom branding",
            "Advanced analytics",
            "Dedicated support",
            "Audit logs",
        ],
    }
]

const currentPlan = "Free Plan"

export default function BillingPage() {
    return (
        <div className="container mx-auto py-6 space-y-8 flex flex-col items-center">
            <div className="flex flex-col items-center text-center w-full lg:w-10/12 space-y-4">
                <h1 className="text-3xl font-bold tracking-tight">Choose Your Plan</h1>
                <p className="text-muted-foreground max-w-2xl">
                    Select the perfect plan for your needs. All plans include our core features.
                    Upgrade or downgrade at any time.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full lg:w-10/12">
                {plans.map((plan) => (
                    <div key={plan.name} className="h-full">
                        <PricingCard
                            {...plan}
                            currentPlan={plan.name === currentPlan}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
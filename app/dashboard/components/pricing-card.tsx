'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BadgeCheck } from "lucide-react"
import { useCurrency } from "@/hooks/use-currency"

interface PricingCardProps {
    name: string
    description: string
    price: number
    features: string[]
    popular?: boolean
    currentPlan?: boolean
}

export function PricingCard({
    name,
    description,
    price,
    features,
    popular,
    currentPlan
}: PricingCardProps) {

    return (
        <Card className={`relative h-full flex flex-col ${popular ? 'border-primary shadow-lg' : ''}`}>
            {popular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                    <span className="bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground rounded-full">
                        Most Popular
                    </span>
                </div>
            )}
            <CardHeader className="flex-none">
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                {/* Price section - fixed height */}
                <div className="h-16 flex items-center">
                    <span className="text-3xl font-bold">${price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                </div>

                {/* Features section - takes remaining space */}
                <div className="flex-1 flex flex-col">
                    <h4 className="font-medium mb-4">Features included:</h4>
                    <ul className="space-y-3 flex-1">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm">
                                <BadgeCheck className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                                <span className="flex-1">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
            <CardFooter className="flex-none">
                <Button 
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 group relative w-full gap-2 overflow-hidden font-semibold tracking-tighter transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                    variant={currentPlan ? "outline" : "default"}
                    disabled={currentPlan}
                >
                    {currentPlan ? "Current Plan" : "Upgrade to " + name}
                </Button>
            </CardFooter>
        </Card>
    )
}

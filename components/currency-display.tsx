'use client'

import { useCurrency } from "@/hooks/use-currency"

export const CurrencyDisplay = ({ amount }: { amount: number }) => {
    const { formatCurrency } = useCurrency()
    return <>{formatCurrency(amount)}</>
}
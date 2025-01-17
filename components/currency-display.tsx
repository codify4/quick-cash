'use client'

import { useCurrency } from "@/hooks/use-currency"

export const CurrencyDisplay = ({ amount }: { amount: number | string }) => {
    const { formatCurrency } = useCurrency()
    return <>{formatCurrency(Number(amount))}</>
}
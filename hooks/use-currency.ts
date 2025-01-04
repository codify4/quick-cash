'use client'

import { useEffect, useState } from 'react'
import { type CurrencyCode } from '@/app/dashboard/(other)/account/page'
import { currencies } from '@/constants/currencies'

export function useCurrency() {
    const [currencyCode, setCurrencyCode] = useState<CurrencyCode>('USD')
    const [currencySymbol, setCurrencySymbol] = useState('$')

    useEffect(() => {
        // Load saved currency from localStorage
        const savedCurrency = localStorage.getItem('preferredCurrency') as CurrencyCode
        if (savedCurrency && currencies.some(c => c.code === savedCurrency)) {
            setCurrencyCode(savedCurrency)
            const currency = currencies.find(c => c.code === savedCurrency)
            if (currency) {
                setCurrencySymbol(currency.symbol)
            }
        }
    }, [])

    const formatCurrency = (amount: number) => {
        if(currencyCode === 'ALB') return `${amount.toFixed(2)} ${currencySymbol}`
        return `${currencySymbol}${amount.toFixed(2)}`
    }

    return {
        currencyCode,
        currencySymbol,
        formatCurrency
    }
}

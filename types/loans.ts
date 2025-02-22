export type Loan = {
    id?: string
    created_at?: string
    name: string
    total_amount: number
    monthly_installment: string
    duration: number
    interest_rate: number
    start_date: string
    status: string
    paid_amount: number
    user_id: string;
}
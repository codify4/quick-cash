export type Loan = {
    id?: string
    created_at?: string
    name: string
    total_amount: string
    monthly_installment: string
    duration: number
    interest_rate: number
    start_date: string
    status: string
    user_id: string;
}
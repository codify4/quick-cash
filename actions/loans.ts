'use server'

import { Loan } from "@/types/loans";
import { createClient } from "@/utils/supabase/server"
import { revalidatePath } from "next/cache"


export async function getLoans(userId: string) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('loans')
        .select('*')
        .eq('user_id', userId)

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function createLoan(loan: Omit<Loan, 'id' | 'created_at'>) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('loans')
        .insert([loan])
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/dashboard/loans');
    return data;
}

export async function updateLoan(id: string, loan: Partial<Omit<Loan, 'id' | 'created_at'>>) {
    const supabase = await createClient();

    const { data, error } = await supabase
        .from('loans')
        .update(loan)
        .eq('id', id)
        .select()
        .single();

    if (error) {
        throw new Error(error.message);
    }

    revalidatePath('/dashboard/loans');

    return data;
}

export async function deleteLoan(id: string) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('loans')
        .delete()
        .eq('id', id);

    if (error) {    
        throw new Error(error.message);
    }

    revalidatePath('/dashboard/loans');
}
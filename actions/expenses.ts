'use server'

import type { Expense } from "@/types/expenses";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export type Period = "thisMonth" | "lastMonth" | "last3Months" | "thisYear";

export const insertExpense = async (expense: Omit<Expense, 'id' | 'created_at'>) => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('expenses')
    .insert([expense])
    .select()
    .single();
    
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/dashboard/expenses');
  
  return data;
}

export const deleteExpense = async (id: number) => {
  const supabase = await createClient();
  
  const { error } = await supabase
    .from('expenses')
    .delete()
    .eq('id', id);
    
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/dashboard/expenses');
}

export const updateExpense = async (id: number, expense: Partial<Omit<Expense, 'id' | 'created_at'>>) => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('expenses')
    .update(expense)
    .eq('id', id)
    .select()
    .single();
    
  if (error) {
    throw new Error(error.message);
  }

  revalidatePath('/dashboard/expenses');

  return data;
}

export const getExpenses = async (userId: string, period?: Period) => {
  const supabase = await createClient();

  const query = supabase
    .from('expenses')
    .select('*')
    .eq('user_id', userId);

  if (period) {
    switch (period) {
      case "thisMonth":
        query.gte('created_at', 'now() - interval \'1 month\'')
             .lt('created_at', 'now()');
        break;
      case "lastMonth":
        query.gte('created_at', 'date_trunc(\'month\', now()) - interval \'1 month\'')
             .lt('created_at', 'date_trunc(\'month\', now())');
        break;
      case "last3Months":
        query.gte('created_at', 'now() - interval \'3 months\'')
             .lt('created_at', 'now()');
        break;
      case "thisYear":
        query.gte('created_at', 'date_trunc(\'year\', now())')
             .lt('created_at', 'now()');
        break;
    }
  }

  query.order('created_at', { ascending: false });

  const { data, error } = await query;
  if (error) throw error;
  return data as Expense[];
}
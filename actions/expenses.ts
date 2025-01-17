'use server'

import type { Expense } from "@/types/expenses";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

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

export const getExpenses = async (userId: string) => {
  const supabase = await createClient();
  
  const { data, error } = await supabase
    .from('expenses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
    
  if (error) {
    throw new Error(error.message);
  }

  return data;
}
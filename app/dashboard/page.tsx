'use client'

import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Target, Wallet } from "lucide-react";
import Link from "next/link";
import { useCurrency } from "@/hooks/use-currency";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { CurrencyDisplay } from "@/components/currency-display";

export default function DashboardPage() {
  const [user, setUser] = useState<User>();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalLoans, setTotalLoans] = useState(0);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        redirect('/signin');
      }
      setUser(user);
    };
    getUser();
  }, []);

  useEffect(() => {
    const fetchTotalExpenses = async () => {
      if (!user) return
      
      const { data, error } = await supabase
        .from('expenses')
        .select('amount')
        .eq('user_id', user.id)
      
      if (error) {
        console.error('Error fetching total expenses:', error)
        return
      }

      const total = data.reduce((sum, expense) => sum + expense.amount, 0)
      setTotalExpenses(total)
    }

    fetchTotalExpenses()
  }, [user])

  if (!user) return null;
    
  return (
    <div className="container mx-20 space-y-8 flex flex-col items-center">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground">{user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card className="rounded-2xl lg:hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost" className="w-full justify-between rounded-lg" asChild>
              <Link href="/dashboard/expenses">
                Manage Expenses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-between rounded-lg" asChild>
              <Link href="/dashboard/loans">
                Track Loans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-between rounded-lg" asChild>
              <Link href="/dashboard/subscriptions">
                Check Subscriptions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="rounded-2xl lg:hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-between gap-y-8">
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Expenses</span>
              <span className="font-medium"><CurrencyDisplay amount={totalExpenses} /></span>
            </div>

            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Loans</span>
              <span className="font-medium"><CurrencyDisplay amount={totalLoans} /></span>
            </div>
            
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Subscriptions</span>
              <span className="font-medium"><CurrencyDisplay amount={0} /></span>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl lg:hover:scale-105 transition-transform duration-300">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 ">
            <Button className="w-full justify-between text-white" variant="default">
              Add New Expense
              <Plus className="h-4 w-4" />
            </Button>
            <Button className="w-full justify-between text-white" variant="default">
              Update Loans
              <Wallet className="h-4 w-4" />
            </Button>
            <Button className="w-full justify-between text-white" variant="default">
              Add New Subscription
              <Target className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus, Target, Wallet } from "lucide-react";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/signin');
    
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Welcome back!</h1>
        <p className="text-muted-foreground">{user.user_metadata?.full_name || user.email?.split('@')[0] || 'User'}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button variant="ghost" className="w-full justify-between" asChild>
              <Link href="/dashboard/expenses">
                Manage Expenses
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-between" asChild>
              <Link href="/dashboard/loans">
                Track Loans
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-between" asChild>
              <Link href="/dashboard/subscriptions">
                Check Subscriptions
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start justify-between gap-y-8">
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Loans</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Expenses</span>
              <span className="font-medium">$0.00</span>
            </div>
            <div className="flex justify-between items-center w-full">
              <span className="text-muted-foreground">Total Subscriptions</span>
              <span className="font-medium">$0.00</span>
            </div>
          </CardContent>
        </Card>

        <Card>
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

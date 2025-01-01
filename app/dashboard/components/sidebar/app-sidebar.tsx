"use client"

import * as React from "react"
import {
  Receipt,
  Wallet,
  CreditCard,
} from "lucide-react"

import { NavTabs } from "@/app/dashboard/components/sidebar/nav-tabs"
import { NavUser } from "@/app/dashboard/components/sidebar/nav-user"
import { TeamSwitcher } from "@/app/dashboard/components/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUser } from '@/hooks/use-user'

const tabs = [
  {
    name: "Expenses",
    url: "/dashboard/expenses",
    icon: Receipt,
  },
  {
    name: "Loans",
    url: "/dashboard/loans",
    icon: Wallet,
  },
  {
    name: "Payments",
    url: "/dashboard/payments",
    icon: CreditCard,
  },
]

const teams = [
  {
    name: "QuickCash",
    logo: '/logo.png',
    plan: "Enterprise",
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, loading } = useUser()
  
  const userData = user ? {
    name: user.user_metadata?.full_name || user.email?.split('@')[0] || 'User',
    email: user.email || '',
    avatar: user.user_metadata?.avatar_url || `https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`,
  } : null

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavTabs tabs={tabs} />
      </SidebarContent>
      <SidebarFooter>
        {userData && <NavUser user={userData} />}
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}

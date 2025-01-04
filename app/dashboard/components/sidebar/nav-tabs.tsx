"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function NavTabs({
  tabs,
}: {
  tabs: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="group-data-[state=collapsed]:hidden">Tools</SidebarGroupLabel>
      <SidebarMenu>
        {tabs.map((item) => (
          <SidebarMenuItem key={item.name} className="flex flex-row items-center justify-center">
            <SidebarMenuButton asChild>
              <Link 
                href={item.url} 
                className={cn(
                  "group flex items-center gap-3 group-data-[state=collapsed]:justify-center",
                  pathname === item.url && "bg-accent text-accent-foreground"
                )}
              >
                <item.icon 
                  size={18} 
                  className={cn(
                    "flex items-center justify-center",
                    pathname === item.url && "text-accent-foreground"
                  )} 
                />
                <span className="group-data-[state=collapsed]:hidden">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

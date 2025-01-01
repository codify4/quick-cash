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

export function NavTabs({
  tabs,
}: {
  tabs: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { isMobile } = useSidebar()

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="group-data-[state=collapsed]:hidden">Tools</SidebarGroupLabel>
      <SidebarMenu>
        {tabs.map((item) => (
          <SidebarMenuItem key={item.name} className="flex flex-row items-center justify-center">
            <SidebarMenuButton asChild>
              <Link href={item.url} className="group flex items-center gap-3 group-data-[state=collapsed]:justify-center">
                <item.icon size={18} className="flex items-center justify-center" />
                <span className="group-data-[state=collapsed]:hidden">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}

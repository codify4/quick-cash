"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface MobileNavProps {
  tabs: {
    name: string
    url: string
    icon: React.ComponentType<{ className?: string }>
  }[]
}

export function MobileNav({ tabs }: MobileNavProps) {
  const pathname = usePathname()

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 border-t bg-background">
      <AnimatePresence>
        <motion.div 
          className="flex items-center justify-center gap-[70px] sm:gap-40 p-2 pb-5"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = pathname === tab.url
            
            return (
              <Link
                key={tab.url}
                href={tab.url}
                className={cn(
                  "flex flex-col items-center justify-center min-w-[4rem] p-2 text-xs rounded-full",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="w-6 h-6 mb-1" />
              </Link>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </nav>
  )
}

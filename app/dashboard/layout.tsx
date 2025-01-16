import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppSidebar, tabs } from "@/app/dashboard/components/sidebar/app-sidebar"
import { BreadcrumbNav } from "@/app/dashboard/components/breadcrumb-nav"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MobileNav } from './components/sidebar/mobile-nav';
import { HeaderUser } from "@/app/dashboard/components/header-user"
import { PageTransition } from "@/app/dashboard/components/page-transition"

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'QuickCash | Dashboard',
  description: 'Manage loans, downpayments, and other payments with ease using QuickCash.',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-4 w-full px-4">
                <HeaderUser />
                <div className="flex items-center gap-2">
                  <SidebarTrigger className="-ml-1 hidden lg:flex" />
                  <Separator orientation="vertical" className="hidden lg:flex mr-2 h-4" />
                  <BreadcrumbNav />
                </div>
              </div>
            </header>
            <main className="flex p-4 pb-24 lg:pb-4">
              <PageTransition>
                {children}
              </PageTransition>
              <MobileNav tabs={tabs} />
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
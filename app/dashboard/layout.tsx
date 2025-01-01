import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { AppSidebar } from "@/app/dashboard/components/sidebar/app-sidebar"
import { BreadcrumbNav } from "@/app/dashboard/components/breadcrumb-nav"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

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
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <BreadcrumbNav />
              </div>
            </header>
            <main className="flex p-4">{children}</main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
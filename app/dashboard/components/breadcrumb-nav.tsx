'use client'

import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BreadcrumbNav() {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const isRootDashboard = pathParts.length === 1 && pathParts[0] === 'dashboard';
  const currentPage = pathParts[pathParts.length - 1];
  const formattedPage = currentPage ? currentPage.charAt(0).toUpperCase() + currentPage.slice(1) : '';

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {!isRootDashboard ? (
          <BreadcrumbItem className="block">
            <BreadcrumbLink href="/dashboard">
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
        ) : (
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        )}
        {formattedPage && !isRootDashboard && (
          <>
            <BreadcrumbSeparator className="block" />
            <BreadcrumbItem>
              <BreadcrumbPage>{formattedPage}</BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

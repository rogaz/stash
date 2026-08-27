import { ReactNode } from "react"
import { usePage, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "./AppSidebar"
import { Flash } from "./Flash"
import { Code } from "lucide-react"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"

interface Folder {
  id: number
  name: string
}

interface SharedProps {
  folders: Folder[],
  flash: {
    notice?: string
    alert?: string
  }
}

interface Props {
  children: ReactNode
  breadcrumbs?: BreadcrumbItem[]
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function AppLayout({ children, breadcrumbs }: Props) {
  const { folders, flash } = usePage<{ props: SharedProps }>().props as unknown as SharedProps

  return (
    <SidebarProvider>
      <AppSidebar folders={folders} />
      <SidebarInset>
        <div className="flex items-center justify-between py-2 px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2" />
            { breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumb>
                <BreadcrumbList>
                  {breadcrumbs.map((item, index) => (
                    <BreadcrumbItem key={index}>
                      {index < breadcrumbs.length - 1 ? (
                        <>
                          {item.href ? (
                            <BreadcrumbLink asChild>
                              <Link href={item.href}>{item.label}</Link>
                            </BreadcrumbLink>
                          ) : (
                            <BreadcrumbLink>{item.label}</BreadcrumbLink>
                          )}
                          <BreadcrumbSeparator />
                        </>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
            </div>
            <Button variant="ghost" asChild size="sm">
              <Link href="/snippets/new"><Code className="mr-2 h-4 w-4" />New Snippet</Link>
            </Button>
        </div>
        <main className="w-full min-h-screen p-4 font-instrument-sans py-4">
          <Flash flash={flash} />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

import { ReactNode } from "react"
import { usePage, Link } from "@inertiajs/react"
import { Button } from "@/components/ui/button"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { AppSidebar } from "./AppSidebar"
import { Flash } from "./Flash"
import { Code } from "lucide-react"

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
}

export function AppLayout({ children }: Props) {
  const { folders, flash } = usePage<{ props: SharedProps }>().props as unknown as SharedProps

  return (
    <SidebarProvider>
      <AppSidebar folders={folders} />
      <SidebarInset>
        <div className="flex items-center justify-between gap-2 py-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <Button asChild size="sm">
              <Link href="/snippets/new"><Code className="mr-2 h-4 w-4" />New Snippet</Link>
            </Button>
        </div>
        <main className="w-full min-h-screen p-4 font-instrument-sans py-8">
          <Flash flash={flash} />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

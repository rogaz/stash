import { ReactNode } from "react";
import { usePage } from "@inertiajs/react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Flash } from "./Flash"

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
      <main className="w-full min-h-screen p-4 font-instrument-sans">
        <SidebarTrigger />
        <Flash flash={flash} />
        {children}
      </main>
    </SidebarProvider>
  )
}

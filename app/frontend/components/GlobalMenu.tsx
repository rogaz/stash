import type { FC } from 'react'

type GlobalMenuProps = {
  rootPath: string
}

const GlobalMenu: FC<GlobalMenuProps> = ({ rootPath }) => {
  return (
    <nav className="border-b border-slate-200 bg-slate-50" aria-label="Global navigation">
      <div className="mx-auto max-w-2xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 text-sm font-medium">
          <a href={rootPath} className="text-sm text-slate-900 underline hover:text-slate-700">
            Home
          </a>
        </div>
      </div>
    </nav>
  )
}

export default GlobalMenu

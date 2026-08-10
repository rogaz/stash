import type { FC } from 'react'

type GlobalMenuProps = {
  rootPath: string
}

const GlobalMenu: FC<GlobalMenuProps> = ({ rootPath }) => {
  return (
    <nav className="flex items-center gap-4 text-sm font-medium" aria-label="Global navigation">
      <a href={rootPath} className="text-slate-900 hover:text-slate-700">
        Home
      </a>
    </nav>
  )
}

export default GlobalMenu

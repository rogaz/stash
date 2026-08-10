import { createRoot } from 'react-dom/client'
import GlobalMenu from '../components/GlobalMenu'

const menuNode = document.getElementById('global-menu')

if (menuNode) {
  const rootPath = menuNode.dataset.rootPath ?? '/'
  createRoot(menuNode).render(<GlobalMenu rootPath={rootPath} />)
}

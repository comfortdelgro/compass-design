import standardNavIcons from 'components/common/AppNavIcons'
import type {MuiPage, OrderedMuiPage} from 'docs/src/MuiPage'

const pages: readonly MuiPage[] = [
  {pathname: '/versions'},
  {
    pathname: 'https://mui.com/store/',
    title: 'Templates',
    icon: standardNavIcons.ReaderIcon,
    linkProps: {
      'data-ga-event-category': 'store',
      'data-ga-event-action': 'click',
      'data-ga-event-label': 'sidenav',
    },
  },
  {pathname: '/blog', title: 'Blog', icon: standardNavIcons.BookIcon},
]

export type {MuiPage, OrderedMuiPage}
export default pages

import {
  faFile,
  faSquarePen,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'
import {TPage} from '../types/common'

export const routes: TPage[] = [
  {
    pathname: '/getting-started',
    title: 'Getting started',
    icon: faFile,
    children: [
      {pathname: '/getting-started', title: 'Overview'},
      {pathname: '/getting-started/installation', title: 'Installation'},
      {pathname: '/getting-started/usage', title: 'Usage'},
    ],
  },
  {
    pathname: '/components/autocomplete',
    title: 'Components',
    icon: faToggleOn,
    children: [
      {
        title: 'Autocomplete',
        pathname: '/components/autocomplete',
      },
      {
        title: 'Avatar',
        pathname: '/components/avatar',
      },
    ],
  },
  {
    pathname: '/customization/theming',
    title: 'Customization',
    icon: faSquarePen,
    children: [
      {pathname: '/customization/theming', title: 'Theming'},
      {pathname: '/customization/z-index', title: 'Z-index'},
    ],
  },
]

export default routes

import {
  faFile,
  faHouse,
  faSquarePen,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'
import {TSideNavItem} from 'types/common'

export const routes: TSideNavItem[] = [
  {
    pathname: '/getting-started',
    title: 'Getting started',
    icon: faFile,
    children: [
      {pathname: '/overview', title: 'Overview'},
      {pathname: '/installation', title: 'Installation'},
      {pathname: '/usage', title: 'Usage'},
    ],
  },
  {
    pathname: '/components',
    title: 'Components',
    icon: faToggleOn,
    children: [
      {
        title: 'Autocomplete',
        pathname: '/autocomplete',
      },
      {
        title: 'Avatar',
        pathname: '/avatar',
      },
      {
        title: 'Button',
        pathname: '/button',
      },
    ],
  },
  {
    pathname: '/customization',
    title: 'Customization',
    icon: faSquarePen,
    children: [
      {pathname: '/theming', title: 'Theming'},
      {pathname: '/z-index', title: 'Z-index'},
    ],
  },
  {
    pathname: '/foundation',
    title: 'Foundation',
    icon: faHouse,
    children: [
      {pathname: '/colors', title: 'Colors'},
      {pathname: '/typography', title: 'Typography'},
      {pathname: '/iconography', title: 'Iconography'},
    ],
  },
]

export default routes

import {
  faFile,
  faSquarePen,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons'

const pages = [
  {
    pathname: '/',
    title: 'Getting started',
    icon: faFile,
    children: [
      {pathname: '/getting-started', title: 'Overview'},
      {pathname: '/getting-started/installation', title: 'Installation'},
      {pathname: '/getting-started/usage', title: 'Usage'},
    ],
  },
  {
    pathname: '/',
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
    pathname: '/',
    icon: faSquarePen,
    children: [
      {pathname: '/customization/theming', title: 'Theming'},
      {pathname: '/customization/z-index', title: 'Z-index'},
    ],
  },
]

export default pages

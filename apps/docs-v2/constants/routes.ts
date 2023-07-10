import standardNavIcons from 'components/common/AppNavIcons'
import {MuiPage} from 'types/MuiPage'

const pages: MuiPage[] = [
  {
    pathname: '/getting-started-group',
    title: 'Getting started',
    icon: standardNavIcons.DescriptionIcon,
    children: [
      {pathname: '/getting-started', title: 'Overview'},
      {pathname: '/getting-started/installation'},
      {pathname: '/getting-started/usage'},
    ],
  },
  {
    pathname: '/react-',
    title: 'Components',
    icon: standardNavIcons.ToggleOnIcon,
    children: [
      {
        pathname: '/components/inputs',
        subheader: 'inputs',
        children: [{pathname: '/react-autocomplete'}],
      },
      {
        pathname: '/components/data-display',
        subheader: 'data-display',
        children: [{pathname: '/react-avatar'}],
      },
    ],
  },
  {
    pathname: '/customization',
    icon: standardNavIcons.CreateIcon,
    children: [
      {
        pathname: '/customization/theme',
        subheader: '/customization/theme',
        children: [
          {pathname: '/customization/theming'},
          {pathname: '/customization/z-index', title: 'z-index'},
        ],
      },
    ],
  },
  {
    pathname: 'https://github.com/comfortdelgro/compass-design',
    title: 'Old version',
    icon: standardNavIcons.ReaderIcon,
  },
]

export default pages

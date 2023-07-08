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
      {pathname: '/getting-started/example-projects'},
      {pathname: '/getting-started/learn'},
      {pathname: '/getting-started/design-resources'},
      {pathname: '/getting-started/faq', title: 'FAQs'},
      {pathname: '/getting-started/supported-components'},
      {pathname: '/getting-started/supported-platforms'},
      {pathname: '/getting-started/support'},
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
          {pathname: '/customization/palette'},
          {pathname: '/customization/dark-mode'},
          {pathname: '/customization/typography'},
          {pathname: '/customization/spacing'},
          {pathname: '/customization/breakpoints'},
          {pathname: '/customization/z-index', title: 'z-index'},
          {pathname: '/customization/transitions'},
          {
            pathname: '/customization/theme-components',
            title: 'Components',
          },
          {
            pathname: '/customization/default-theme',
            title: 'Default theme viewer',
          },
        ],
      },
      {pathname: '/customization/how-to-customize'},
      {pathname: '/customization/color'},
    ],
  },
  {
    pathname: 'https://google.com',
    title: 'Other size',
    icon: standardNavIcons.ReaderIcon,
  },
]

export default pages

import pagesApi from 'docs/data/material/pagesApi'
import standardNavIcons from 'docs/src/modules/components/AppNavIcons'
import {MuiPage} from 'docs/src/MuiPage'

const pages: MuiPage[] = [
  {
    pathname: '/material-ui/getting-started-group',
    title: 'Getting started',
    icon: standardNavIcons.DescriptionIcon,
    children: [
      {pathname: '/material-ui/getting-started', title: 'Overview'},
      {pathname: '/material-ui/getting-started/installation'},
      {pathname: '/material-ui/getting-started/usage'},
      {pathname: '/material-ui/getting-started/example-projects'},
      {pathname: '/material-ui/getting-started/learn'},
      {pathname: '/material-ui/getting-started/design-resources'},
      {pathname: '/material-ui/getting-started/faq', title: 'FAQs'},
      {pathname: '/material-ui/getting-started/supported-components'},
      {pathname: '/material-ui/getting-started/supported-platforms'},
      {pathname: '/material-ui/getting-started/support'},
    ],
  },
  {
    pathname: '/material-ui/react-',
    title: 'Components',
    icon: standardNavIcons.ToggleOnIcon,
    children: [
      {
        pathname: '/material-ui/components/inputs',
        subheader: 'inputs',
        children: [{pathname: '/material-ui/react-autocomplete'}],
      },
      {
        pathname: '/material-ui/components/data-display',
        subheader: 'data-display',
        children: [{pathname: '/material-ui/react-avatar'}],
      },
    ],
  },
  {
    title: 'Component API',
    pathname: '/material-ui/api',
    icon: standardNavIcons.CodeIcon,
    children: pagesApi,
  },
  {
    pathname: '/material-ui/customization',
    icon: standardNavIcons.CreateIcon,
    children: [
      {
        pathname: '/material-ui/customization/theme',
        subheader: '/material-ui/customization/theme',
        children: [
          {pathname: '/material-ui/customization/theming'},
          {pathname: '/material-ui/customization/palette'},
          {pathname: '/material-ui/customization/dark-mode'},
          {pathname: '/material-ui/customization/typography'},
          {pathname: '/material-ui/customization/spacing'},
          {pathname: '/material-ui/customization/breakpoints'},
          {pathname: '/material-ui/customization/z-index', title: 'z-index'},
          {pathname: '/material-ui/customization/transitions'},
          {
            pathname: '/material-ui/customization/theme-components',
            title: 'Components',
          },
          {
            pathname: '/material-ui/customization/default-theme',
            title: 'Default theme viewer',
          },
        ],
      },
      {pathname: '/material-ui/customization/how-to-customize'},
      {pathname: '/material-ui/customization/color'},
    ],
  },
  {
    pathname:
      'https://mui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=sidenav',
    title: 'Other size',
    icon: standardNavIcons.ReaderIcon,
  },
]

export default pages

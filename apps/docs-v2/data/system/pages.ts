import standardNavIcons from 'docs/src/modules/components/AppNavIcons';
import pagesApi from 'docs/data/system/pagesApi';

const pages = [
  {
    pathname: '/system/getting-started-group',
    title: 'Getting started',
    icon: standardNavIcons.DescriptionIcon,
    children: [
      { pathname: '/system/getting-started', title: 'Overview' },
      { pathname: '/system/getting-started/installation' },
      { pathname: '/system/getting-started/usage' },
      { pathname: '/system/getting-started/the-sx-prop' },
      { pathname: '/system/getting-started/custom-components' },
    ],
  },
  {
    pathname: '/style-utilities',
    icon: standardNavIcons.BuildIcon,
    children: [
      { pathname: '/system/properties' },
      { pathname: '/system/borders' },
      { pathname: '/system/display' },
      { pathname: '/system/flexbox' },
      { pathname: '/system/grid' },
      { pathname: '/system/palette' },
      { pathname: '/system/positions' },
      { pathname: '/system/shadows' },
      { pathname: '/system/sizing' },
      { pathname: '/system/spacing' },
      { pathname: '/system/screen-readers' },
      { pathname: '/system/typography' },
      { pathname: '/system/styled', title: 'styled' },
    ],
  },
  {
    pathname: '/system/react-',
    title: 'Components',
    icon: standardNavIcons.ToggleOnIcon,
    children: [
      { pathname: '/system/react-box', title: 'Box' },
      { pathname: '/system/react-container', title: 'Container' },
      { pathname: '/system/react-grid', title: 'Grid' },
      { pathname: '/system/react-stack', title: 'Stack' },
    ],
  },
  {
    title: 'APIs',
    pathname: '/system/api',
    icon: standardNavIcons.CodeIcon,
    children: pagesApi,
  },
  {
    pathname: '/system/experimental-api',
    title: 'Experimental APIs',
    icon: standardNavIcons.ExperimentIcon,
    children: [
      {
        pathname: '/system/experimental-api/configure-the-sx-prop',
        title: 'Configure the sx prop',
      },
      {
        pathname: '/system/experimental-api/css-theme-variables',
        title: 'CSS Theme Variables',
      },
    ],
  },
  {
    pathname: '/system/styles',
    title: 'Styles',
    legacy: true,
    icon: standardNavIcons.StyleIcon,
    children: [
      { pathname: '/system/styles/basics' },
      { pathname: '/system/styles/advanced' },
      { pathname: '/system/styles/api', title: 'APIs' },
    ],
  },
];

export default pages;

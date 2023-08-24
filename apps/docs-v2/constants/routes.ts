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
        title: 'Accordions',
        pathname: '/accordions',
      },
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
      {
        title: 'ActionBar',
        pathname: '/actionbar',
      },
      {
        title: 'Badges',
        pathname: '/badges',
      },
      {
        title: 'Banner',
        pathname: '/banner',
      },
      {
        title: 'Box',
        pathname: '/box',
      },
      {
        title: 'Breadcrumbs',
        pathname: '/breadcrumbs',
      },
      {
        title: 'Calendar',
        pathname: '/calendar',
      },
      {
        title: 'Card',
        pathname: '/card',
      },
      {
        title: 'Carousel',
        pathname: '/carousel',
      },
      {
        title: 'Checkbox',
        pathname: '/checkbox',
      },
      {
        title: 'Chip',
        pathname: '/chip',
      },
      {
        title: 'DashboardSidecard',
        pathname: '/dashboard-sidecard',
      },
      {
        title: 'Dialog',
        pathname: '/dialog',
      },
      {
        title: 'Divider',
        pathname: '/divider',
      },
      {
        title: 'Dropdown',
        pathname: '/dropdown',
      },
      {
        title: 'Dropdown Menu',
        pathname: '/dropdown-menu',
      },
      {
        title: 'Error',
        pathname: '/error',
      },
      {
        title: 'Icon',
        pathname: '/icon',
      },
      {
        title: 'Image Viewer',
        pathname: '/image-viewer',
      },
      {
        title: 'Link',
        pathname: '/link',
      },
      {
        title: 'List',
        pathname: '/list',
      },
      {
        title: 'MenuList',
        pathname: '/menu-list',
        description:
          "The Menu List component allows you to create a menu with expandable items.",
      },
      {
        title: 'Modal',
        pathname: '/modal',
        description:
          "The Modal component is a flexible and customizable modal/dialog that can be used in various use cases like confirmation dialogs, information popups, and more.",
      },
      {
        title: 'OTP Input',
        pathname: '/otp-input',
        description:
          "OTP Input component for inputting One-Time Passwords.",
      },
      {
        title: 'Page Header',
        pathname: '/page-header',
        description:
          "The Page header is used to begin pages and is a format guideline to how the top of a page should be organised.",
      },
      {
        title: 'Popover',
        pathname: '/popover',
        description:
          "When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines.",
      },
      {
        title: 'Portal',
        pathname: '/portal',
        description:
          "The sample of portal layout, admin page layout.",
      },
      {
        title: 'QuantityToggle',
        pathname: '/quantity-toggle',
        description:
          "Quantity Toggle fields allow users to enter a number, and increment or decrement the value using stepper buttons.",
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
      {pathname: '/overview', title: 'Overview'},
      {pathname: '/colors', title: 'Colors'},
      {pathname: '/typography', title: 'Typography'},
      {pathname: '/iconography', title: 'Iconography'},
    ],
  },
]

export default routes

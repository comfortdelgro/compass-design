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
      {
        pathname: '/installation',
        title: 'Installation',
        description:
          "Install React Compass, the world's most popular React UI framework.",
      },
      {
        pathname: '/usage',
        title: 'Usage',
        description:
          'Learn the basics of working with React Compass components.',
      },
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
        description:
          'Auto-complete is a text input with a list of suggestions that users can select from.',
      },
      {
        title: 'Autocomplete',
        pathname: '/autocomplete',
        description:
          'Auto-complete is a text input with a list of suggestions that users can select from.   ',
      },
      {
        title: 'Avatar',
        pathname: '/avatar',
        description:
          "Avatars can be used in everything including a person's profile picture, dialog menu, ext.",
      },
      {
        title: 'Button',
        pathname: '/button',
        description:
          'Buttons allow users to take actions, and make choices, with a single tap.',
      },
      {
        title: 'ActionBar',
        pathname: '/actionbar',
        description:
          'The ActionBar component is a versatile user interface element that provides a cohesive grouping of buttons, icons, and interactive elements within a container.',
      },
      {
        title: 'Badges',
        pathname: '/badges',
        description:
          'Badge can be used to highlight important bits of information such as labels, notifications, data trends & status.',
      },
      {
        title: 'Box',
        pathname: '/box',
        description:
          'The Box component serves as a wrapper component for most of the CSS utility needs.',
      },
      {
        title: 'Breadcrumbs',
        pathname: '/breadcrumbs',
        description:
          "Breadcrumbs consist of a list of links that help a user visualize a page's location within the hierarchical structure of a website.",
      },
      {
        title: 'Calendar',
        pathname: '/calendar',
        description:
          'Calendars display a grid of days in one or more months and allow users to select a single date',
      },
      {
        title: 'Card',
        pathname: '/card',
        description:
          'Cards provide a flexible and extensible content container with multiple variants and options.',
      },
      {
        title: 'Carousel',
        pathname: '/carousel',
        description:
          'A group of slider components. The core component is CarouselSlider with common feature is switching slides.',
      },
      {
        title: 'Chip',
        pathname: '/chip',
        description:
          'Chips are compact elements that represent an input, attribute, or action.',
      },
      {
        title: 'DashboardSidecard',
        pathname: '/dashboard-sidecard',
        description:
          'Dashboard Sidecard presents section of data on dashboard.',
      },
      {
        title: 'Dialog',
        pathname: '/dialog',
        description:
          'These Dialog boxes can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users.',
      },
      {
        title: 'Divider',
        pathname: '/divider',
        description:
          'A divider is a thin line that groups content in lists and layouts.',
      },
      {
        title: 'Dropdown Menu',
        pathname: '/dropdown-menu',
        description:
          'A drop-down menu is toggle contextual overlays for displaying lists of links and more.',
      },
      {
        title: 'Error',
        pathname: '/error',
        description:
          'An error displays a message that describes an error that occurred.',
      },
      {
        title: 'Icon',
        pathname: '/icon',
        description: 'The SGV icons.',
      },
      {
        title: 'Image Viewer',
        pathname: '/image-viewer',
        description: 'Using to display list of images.',
      },
      {
        title: 'Link',
        pathname: '/link',
        description:
          'The Link component allows you to easily customize anchor elements with your theme colors and typography styles.',
      },
      {
        title: 'List',
        pathname: '/list',
        description: 'Lists show a large set of items or options to the user.',
      },
    ],
  },
  {
    pathname: '/customization',
    title: 'Customization',
    icon: faSquarePen,
    children: [
      {
        pathname: '/theming',
        title: 'Theming',
        description:
          'Customize React Compass with your theme. You can change the colors, the typography and much more.',
      },
      {
        pathname: '/z-index',
        title: 'Z-index',
        description:
          'Z-index is the CSS property that helps control layout by providing a third axis to arrange content.',
      },
    ],
  },
  {
    pathname: '/foundation',
    title: 'Foundation',
    icon: faHouse,
    children: [
      {
        pathname: '/overview',
        title: 'Overview',
        description:
          'Foundations inform the basis of any great user interface, from accessibility standards to essential patterns for layout and interaction.',
      },
      {
        pathname: '/colors',
        title: 'Colors',
        description:
          'Color distinguishes a brand. It is used to convey personality, attracts the eye and indicate change.',
      },
      {
        pathname: '/typography',
        title: 'Typography',
        description:
          'Clear typographical hierarchy organizes and structures content, making it easy for people to find their way through an experience.',
      },
      {
        pathname: '/iconography',
        title: 'Iconography',
        description:
          'Icons are visual representations of commands, devices, directories, or common actions.',
      },
    ],
  },
]

export default routes

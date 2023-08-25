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
        title: 'Banner',
        pathname: '/banner',
        description:
          'The Banner component is a reusable React component that displays a banner or header section on a web page',
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
        title: 'Checkbox',
        pathname: '/checkbox',
        description:
          'Checkbox is a small interactive box that can be toggled by the user to indicate an affirmative or negative choice.',
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
        title: 'Drawer',
        pathname: '/drawer',
        description:
          'Display overlay area on top of a page and slides in from the side. Build on top of the native HTML <dialog/> element.',
      },
      {
        title: 'Dropdown',
        pathname: '/dropdown',
        description:
          'Dropdown components are used for collecting user provided information from a list of options.',
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
      {
        title: 'MenuList',
        pathname: '/menu-list',
        description:
          'The Menu List component allows you to create a menu with expandable items.',
      },
      {
        title: 'Modal',
        pathname: '/modal',
        description:
          'The Modal component is a flexible and customizable modal/dialog that can be used in various use cases like confirmation dialogs, information popups, and more.',
      },
      {
        title: 'OTP Input',
        pathname: '/otp-input',
        description: 'OTP Input component for inputting One-Time Passwords.',
      },
      {
        title: 'Page Header',
        pathname: '/page-header',
        description:
          'The Page header is used to begin pages and is a format guideline to how the top of a page should be organised.',
      },
      {
        title: 'Popover',
        pathname: '/popover',
        description:
          'When you want to show a content on above and anchor with an element when user click on it, just use this component follow this guidelines.',
      },
      {
        title: 'Portal',
        pathname: '/portal',
        description: 'The sample of portal layout, admin page layout.',
      },
      {
        title: 'QuantityToggle',
        pathname: '/quantity-toggle',
        description:
          'Quantity Toggle fields allow users to enter a number, and increment or decrement the value using stepper buttons.',
        title: 'Range Calendar',
        pathname: '/range-calendar',
        description:
          'RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.',
      },
      {
        title: 'Rating',
        pathname: '/rating',
        description: 'Rating provides others opinions and experiences.',
      },
      {
        title: 'Rich text editor',
        pathname: '/rich-text-editor',
        description:
          'A rich text editor is an interface or input field for text editing.',
      },
      {
        title: 'Searchfield',
        pathname: '/searchfield',
        description: 'Search Fields let users enter search input.',
      },
      {
        title: 'Sidebar',
        pathname: '/sidebar',
        description:
          'Sidebar is an expandable and collapsible component that typically acts as a side container to place primary or secondary content alongside the main content.',
      },
      {
        title: 'Sidenav',
        pathname: '/sidenav',
        description:
          'The Sidenav displays horizontally information and navigation relating to the current screen.',
      },
      {
        title: 'Skeleton',
        pathname: '/skeleton',
        description:
          'Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.',
      },
      {
        title: 'Slider',
        pathname: '/slider',
        description:
          'Provides the behavior and accessibility implementation for a slider component representing one or more values.',
      },
      {
        title: 'SpeedDial',
        pathname: '/speed-dial',
        description:
          'Provides the behavior and accessibility implementation for a speed-dial component.',
      },
      {
        title: 'SubHeader',
        pathname: '/sub-header',
        description:
          'The Sub header is then used to follow up on the top of subsequent child pages.',
      },
      {
        title: 'SubBanner',
        pathname: '/sub-banner',
        description: 'The Sub Banner.',
      },
      {
        title: 'Table-v2',
        pathname: '/table-v2',
        description:
          'Table version 2 is a wrapper around the core table logic. Most of its job is related to managing state the "react" way.',
      },
      {
        title: 'Tabs',
        pathname: '/tabs',
        description:
          'Provides the behavior and accessibility implementation for a tab list. Tabs organize content into multiple sections and allow users to navigate between them.',
      },
      {
        title: 'Tag Box',
        pathname: '/tag-box',
        description: 'Tag Box using to display list of tags.',
      },
      {
        title: 'Tag Box V2',
        pathname: '/tag-box-v2',
        description: 'Tag Box V2 using to display list of tags.',
      },
      {
        title: 'Textarea',
        pathname: '/textarea',
        description:
          'Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.',
      },
      {
        title: 'Text Field',
        pathname: '/textfield',
        description: 'Text Fields let users enter and edit text.',
      },
      {
        title: 'Timeline',
        pathname: '/timeline',
        description:
          'The timeline displays a list of events in chronological order.',
      },
      {
        title: 'Tooltip',
        pathname: '/tooltip',
        description:
          'Display container for Tooltip content. Has a directional arrow dependent on its placement.',
      },
      {
        title: 'Typography',
        pathname: '/typography',
        description: 'The Typography component.',
      },
      {
        title: 'Upload',
        pathname: '/upload',
        description:
          'The upload component allows users to upload files of various types and sizes.',
      },
      {
        title: 'Video Player',
        pathname: '/video-player',
        description: 'Using to display a video.',
      },
      {
        title: 'Wizard',
        pathname: '/wizard',
        description: 'Using for display stepper.',
      },
    ],
  },
]

export default routes

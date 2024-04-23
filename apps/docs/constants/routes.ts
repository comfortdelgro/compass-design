import {
  faCog,
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
      {
        pathname: '/upgrading',
        title: 'Upgrading',
        description: 'How to upgrade package version.',
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
        title: 'Announcement',
        pathname: '/announcement',
        description:
          'An announcement banner displays an important, succinct message.',
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
        title: 'App Navigation',
        pathname: '/app-navigation',
        description:
          'A navigation bar containing a number of destinations at the top or bottom of the screen .',
      },
      {
        title: 'Button',
        pathname: '/button',
        description:
          'Buttons allow users to take actions, and make choices, with a single tap.',
      },
      {
        title: 'Dropdown Textfield',
        pathname: '/dropdown-textfield',
        description:
          'The combination of dropdown and textfield in one component.',
      },
      {
        title: 'Action Bar',
        pathname: '/action-bar',
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
        title: 'Dashboard Sidecard',
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
          'Display overlay area on top of a page and slides in from the side. Build on top of the native HTML &#60;dialog/> element.',
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
        title: 'Alert',
        pathname: '/alert',
        description:
          'The Alert component displays important messages to the user.',
      },
      {
        title: 'Chart',
        pathname: '/chart',
        description: 'Charts visualize data in graphical form.',
      },
      {
        title: 'Date Picker',
        pathname: '/date-picker',
        description:
          'Date Picker allows users to select dates from a calendar.',
      },
      {
        title: 'Date Range Picker',
        pathname: '/date-range-picker',
        description:
          'Date Range Picker enables users to select a range of dates.',
      },
      {
        title: 'File',
        pathname: '/file',
        description: 'File component handles file uploads and interactions.',
      },
      {
        title: 'Footer',
        pathname: '/footer',
        description: 'Footer is typically used at the bottom of a web page.',
      },
      {
        title: 'Form Layout',
        pathname: '/form-layout',
        description:
          'Form Layout arranges form elements for a consistent look.',
      },
      {
        title: 'Grid',
        pathname: '/grid',
        description: 'Grid system helps organize and align page elements.',
      },
      {
        title: 'Gutter',
        pathname: '/gutter',
        description: 'Gutter provides spacing between grid or layout items.',
      },
      {
        title: 'Multiple Dropdown',
        pathname: '/multiple-dropdown',
        description: 'Multiple Dropdown allows selecting multiple options.',
      },
      {
        title: 'No-SSR',
        pathname: '/no-ssr',
        description:
          'No-SSR ensures components are not rendered on the server.',
      },
      {
        title: 'Progress Bar',
        pathname: '/progress-bar',
        description: 'Progress Bar indicates completion of a task.',
      },
      {
        title: 'Radio',
        pathname: '/radio',
        description:
          'Radio allows users to select a single option from a list.',
      },
      {
        title: 'Multiple Choices Slider',
        pathname: '/multiple-choices-slider',
        description: 'Specific multi choices H5 component.',
      },
      {
        title: 'Searchfield',
        pathname: '/searchfield',
        description: 'Searchfield provides an input for search queries.',
      },
      {
        title: 'Spinner',
        pathname: '/spinner',
        description: 'Spinner indicates loading or processing activity.',
      },
      {
        title: 'Toggle',
        pathname: '/toggle',
        description: 'Toggle switches between two states, like on/off.',
      },
      {
        title: 'Transitions',
        pathname: '/transitions',
        description: 'Transitions add animations when elements change.',
      },
      {
        title: 'Time Picker',
        pathname: '/time-picker',
        description: 'Time Picker allows users to select times of day.',
      },
      {
        title: 'Pagination',
        pathname: '/pagination',
        description: 'Pagination divides content into pages for navigation.',
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
        title: 'Natural Drawer',
        pathname: '/natural-drawer',
        description:
          'The new version of Drawer that using natural scrollbar to handle everything and have less logic.',
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
        title: 'Quantity Toggle',
        pathname: '/quantity-toggle',
        description:
          'Quantity Toggle fields allow users to enter a number, and increment or decrement the value using stepper buttons.',
      },
      {
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
        title: 'Slide action | Swiper',
        pathname: '/slide-action',
        description:
          'Usually use for important actions, such as purchase order, changes privacy setting, turn off devices, etc.',
      },
      {
        title: 'Slider',
        pathname: '/slider',
        description:
          'Provides the behavior and accessibility implementation for a slider component representing one or more values.',
      },
      {
        title: 'Snackbar',
        pathname: '/snackbar',
        description:
          'Provides brief messages of a process that an app has performed or will perform at the bottom of the screen.',
      },
      {
        title: 'SpeedDial',
        pathname: '/speed-dial',
        description:
          'Provides the behavior and accessibility implementation for a speed-dial component.',
      },
      {
        title: 'SpeedDial2',
        pathname: '/speed-dial2',
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
        title: 'Table',
        pathname: '/table',
        description:
          'Table is a wrapper around the core table logic. Most of its job is related to managing state the "react" way.',
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
      {
        title: 'Navbar',
        pathname: '/navbar',
        description: `The navbar is your site's navigation hub`,
      },
      {
        title: 'Progress',
        pathname: '/progress',
        description: 'The progress component tracks task completion.',
      },
      {
        title: 'PUDO',
        pathname: '/pudo',
        description:
          'A journey planner that allows user to input multiple locations.',
      },
      {
        title: 'Toast',
        pathname: '/toast',
        description: 'The toast component displays a message.',
      },
    ],
  },

  {
    pathname: '/utilities',
    title: 'Utilities',
    icon: faCog,
    children: [
      {
        title: 'Calendar',
        pathname: '/date/calendar',
        description:
          'The Calendar represents a calendar system, including information about how days, months, years, eras are organized, and methods to perform arithmetic on dates.',
      },
      {
        title: 'CalendarDate',
        pathname: '/date/calendar-date',
        description:
          'A CalendarDate represents a date without any time components in a specific calendar system.',
      },
      {
        title: 'CalendarDateTime',
        pathname: '/date/calendar-date-time',
        description:
          'A CalendarDateTime represents a date and time without a time zone, in a specific calendar system.',
      },
      {
        title: 'DateFormatter',
        pathname: '/date/date-formatter',
        description:
          'A wrapper around Intl.DateTimeFormat that fixes various browser bugs, and polyfills new features.',
      },
      {
        title: 'Time',
        pathname: '/date/time',
        description:
          'A Time represents a clock time without any date components.',
      },
      {
        title: 'ZonedDateTime',
        pathname: '/date/zoned-date-time',
        description:
          'A ZonedDateTime represents a date and time in a specific time zone and calendar system.',
      },
      {
        title: 'NumberParser',
        pathname: '/number/number-parser',
        description:
          'A NumberParser can be used to perform locale-aware parsing of numbers from Unicode strings, as well as validation of partial user input. ',
      },
      {
        title: 'NumberFormatter',
        pathname: '/number/number-formatter',
        description:
          'A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.',
      },
      {
        title: 'I18nProvider',
        pathname: '/i18n/i18nProvider',
        description:
          'Provides the locale for the application to all child components.',
      },
      {
        title: 'useCollator',
        pathname: '/i18n/useCollator',
        description:
          'Provides localized string collation for the current locale.',
      },
      {
        title: 'useDateFormatter',
        pathname: '/i18n/useDateFormatter',
        description:
          'Provides localized date formatting for the current locale.',
      },
      {
        title: 'useFilter',
        pathname: '/i18n/useFilter',
        description:
          'Provides localized string search functionality that is useful for filtering or matching items in a list.',
      },
    ],
  },
]

export default routes

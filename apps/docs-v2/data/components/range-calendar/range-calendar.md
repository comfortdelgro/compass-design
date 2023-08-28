---
title: React Range Calendar component
components: RangeCalendar
---

# Range Calendar

<p class="description">RangeCalendars display a grid of days in one or more months and allow users to select a contiguous range of dates.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## I18n

<p>React Compass use [React Aria I18N](https://react-spectrum.adobe.com/react-aria/internationalization.html) and [React Aria Internationalized](https://react-spectrum.adobe.com/internationalized/index.html) to deal with i18n.</p>

How to use

```jsx
import Calendar from '@comfortdelgro/react-compass/calendar'

const {
  /** any function in react aria i18n */
} = Calendar.I18N
const {
  /** any function in react aria internationalized */
} = Calendar.InternationalizedDate

```
## I18nProvider

I18nProvider allows you to override the default locale as determined by the browser/system setting with a locale defined by your application (e.g. application setting).
In this docs, we will use English(Singapore) `en-SG` as default locale

```jsx
import Calendar from '@comfortdelgro/react-compass/calendar'

const {
  I18nProvider
} = Calendar.I18N

<I18nProvider locale="en-SG">
  <App/>
</I18nProvider>

```

### Import

```jsx
import {RangeCalendar} from '@comfortdelgro/react-compass'
```

or

```jsx
import RangeCalendar from '@comfortdelgro/react-compass/range-calendar'
```

## Example

### Basic

{{"demo": "CalendarBasic.tsx"}}

### Controlled Range Calendar

{{"demo": "ControlledRangeCalendar.tsx"}}

### Customize ShorcutsRange Calendar

{{"demo": "CustomizeShorcutsRangeCalendar.tsx"}}


## Props

| Name                | Type                                                                                                                   | Default | Description                                                                                                                 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| minValue            | `DateValue`                                                                                                            |         | The minimum allowed date that a user may select.                                                                            |
| maxValue            | `DateValue`                                                                                                            |         | The maximum allowed date that a user may select.                                                                            |
| isReadOnly          | `boolean`                                                                                                              | false   | Whether the calendar value is immutable.                                                                                    |
| isDisabled          | `boolean`                                                                                                              | false   | Whether the calendar is disabled.                                                                                           |
| visibleMonths       | 1 \| 2                                                                                                                 | 2       | Whether the range calendar shows 2 months consecutively or not.                                                             |
| hasFooter           | `boolean`                                                                                                              | false   | Whether the calendar footer is shown.                                                                                       |
| hasShortcuts        | `boolean`                                                                                                              | false   | Whether the calendar shorcuts is shown.                                                                                     |
| value               | `RangeValue<DateValue \|\| null>`                                                                                      |         | The current value (controlled).                                                                                             |
| defaultValue        | `RangeValue<DateValue>`                                                                                                |         | The default value (uncontrolled).                                                                                           |
| onChange            | `(e: RangeValue<DateValue \|\| null>) => void`                                                                         |         | Callback fired when the value changes.                                                                                      |
| onSearchButtonClick | `(e: MouseEvent) => void`                                                                                              |         | Callback fired when the Search Button in the footer is clicked.                                                             |
| ctaButtonRender     | `React.ReactNode`                                                                                                      |         | To render custom CTA Button in the footer                                                                                   |
| customShortcuts     | `(defaultShortcuts: RangeCalendarShorcutItem[], isValid: (value: DateValue) => boolean) => RangeCalendarShorcutItem[]` |         | This callback function is to render custom shortcuts. It has two params: `defaultShortcuts` and `isInvalid` for user to use |
| isDateUnavailable   | `(date: DateValue) => boolean`                                                                                         |         | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                    |


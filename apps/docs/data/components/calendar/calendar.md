---
title: React Calendar component
components: Calendar
---

# Calendar

<p class="description">Calendars display a grid of days in one or more months and allow users to select a single date.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {Calendar} from '@comfortdelgro/react-compass'
```

## Example

### Calendar

{{"demo": "Calendar.tsx"}}

### Validation Calendar

{{"demo": "Validation.tsx"}}

## Props

| Name              | Type                               | Default | Description                                                                                              |
| :---------------- | :--------------------------------- | :------ | :------------------------------------------------------------------------------------------------------- |
| minValue          | `DateValue`                        |         | The minimum allowed date that a user may select.                                                         |
| maxValue          | `DateValue`                        |         | The maximum allowed date that a user may select.                                                         |
| isReadOnly        | `boolean`                          | false   | Whether the calendar value is immutable.                                                                 |
| isDisabled        | `boolean`                          | false   | Whether the calendar is disabled.                                                                        |
| hasFooter         | `boolean`                          | false   | Whether the calendar footer is shown.                                                                    |
| value             | `DateValue \|\| null`              |         | The current value (controlled).                                                                          |
| defaultValue      | `DateValue`                        |         | The default value (uncontrolled).                                                                        |
| onChange          | `(e: DateValue \|\| null) => void` |         | The default value (uncontrolled).                                                                        |
| isDateUnavailable | `(date: DateValue) => boolean`     |         | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable. |

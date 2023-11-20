---
title: React Date Picker component
components: Date Range Picker
---

# Date Range Picker

<p class="description">
DateRangePickers combine two input fields and a RangeCalendar popover to allow users to enter or select a date and time range .</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {DateRangePicker} from '@comfortdelgro/react-compass'
```

or

```js
import DateRangePicker from '@comfortdelgro/react-compass/date-range-picker'
```

### I18n Provider

I18nProvider allows you to override the default locale as determined by the browser/system setting with a locale defined by your application (e.g. application setting).
In this docs, we will use English(Singapore) `en-SG` as default locale

```js
import Calendar from '@comfortdelgro/react-compass/calendar'

const {
  I18nProvider
} = Calendar.I18N

<I18nProvider locale="en-SG">
  <App/>
</I18nProvider>

```

### Basic Date Range Picker

{{"demo": "DateRangePickerBasic.tsx"}}

### Controlled Date Range Picker

{{"demo": "DateRangePickerControlled.tsx"}}

### Granularity

The granularity prop allows you to control the smallest unit that is displayed by a DatePicker.

{{"demo": "DateRangePickerGranularity.tsx"}}

### Labeling

A visual label should be provided for the DatePicker using the label prop. If the DatePicker is required, the isRequired and necessityIndicator props can be used to show a required state.

{{"demo": "DateRangePickerLabeling.tsx"}}

### Validation

Date Range Picker supports marking certain dates as unavailable. These dates cannot be selected by the user and are displayed with a crossed out appearance. The isDateUnavailable prop accepts a callback that is called to evaluate whether each visible date is unavailable.

{{"demo": "DateRangePickerValidation.tsx"}}

### Non-contiguous ranges

{{"demo": "DateRangePickerNonContiguous.tsx"}}

### Shortcuts

{{"demo": "DateRangePickerShortcuts.tsx"}}

### One Calendar Only

{{"demo": "DateRangePickerOneCalendar.tsx"}}

### IsDisabled

{{"demo": "DateRangePickerIsDisabled.tsx"}}

### Read Only

{{"demo": "DateRangePickerReadOnly.tsx"}}

### InValid

{{"demo": "DateRangePickerInvalid.tsx"}}

## Props

| Name                            | Type                                                                                                                   | Default | Description                                                                                                                                |
| :------------------------------ | :--------------------------------------------------------------------------------------------------------------------- | :------ | :----------------------------------------------------------------------------------------------------------------------------------------- |
| calendarCSS                     | `CSS`                                                                                                                  |         | Style for calendar                                                                                                                         |
| allowsNonContiguousRanges       | `boolean`                                                                                                              |         | When combined with isDateUnavailable, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected. |
| minValue                        | `DateValue`                                                                                                            |         | The minimum allowed date that a user may select.                                                                                           |
| maxValue                        | `DateValue`                                                                                                            |         | The maximum allowed date that a user may select.                                                                                           |
| granularity                     | `'day' \| 'hour' \| 'minute' \| 'second'`                                                                              |         | Determines the smallest unit that is displayed in the date picker. By default, this is "day" for dates, and "minute" for times.            |
| visibleMonths                   | 1 \| 2                                                                                                                 | 2       | Whether the range calendar shows 2 months consecutively or not.                                                                            |
| isReadOnly                      | `boolean`                                                                                                              | false   | Whether the calendar value is immutable.                                                                                                   |
| isDisabled                      | `boolean`                                                                                                              | false   | Whether the calendar is disabled.                                                                                                          |
| value                           | `RangeValue<DateValue>`                                                                                                |         | The current value (controlled).                                                                                                            |
| defaultValue                    | `RangeValue<DateValue>`                                                                                                |         | The default value (uncontrolled).                                                                                                          |
| hourCycle                       | `12                                       \| 24`                                                                       |         | Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.                                  |
| startDateLabel                  | `React.ReactNode`                                                                                                      |         | The content to display as the label.                                                                                                       |
| endDateLabel                    | `React.ReactNode`                                                                                                      |         | The content to display as the label.                                                                                                       |
| helperText                      | `React.ReactNode`                                                                                                      |         | The content to display as helper text                                                                                                      |
| necessityIndicator              | `'icon' \| 'label'`                                                                                                    |         | Whether the required state should be shown as an icon or text.                                                                             |
| shouldCloseOnSelect             | `boolean`                                                                                                              | false   | Whether the overlay will close after selected.                                                                                             |
| necessityIndicator              | `'icon' \| 'label'`                                                                                                    |         | Whether the required state should be shown as an icon or text.                                                                             |
| shouldOnChangeTriggerOnSameDate | `boolean`                                                                                                              | false   | Should onChange fired when user re-select the selected start date                                                                          |
| isMobile                        | `boolean`                                                                                                              | false   | Whether the overlay is in mobile variant.                                                                                                  |
| isOpen                          | `boolean`                                                                                                              | false   | Whether the overlay is open by default (controlled).                                                                                       |
| defaultOpen                     | `boolean`                                                                                                              | false   | Whether the overlay is open by default (uncontrolled).                                                                                     |
| hasShortcuts                    | `boolean`                                                                                                              | false   | Whether the calendar shorcuts is shown.                                                                                                    |
| onSearchButtonClick             | `(e: MouseEvent) => void`                                                                                              |         | Callback fired when the Search Button in the footer is clicked.                                                                            |
| ctaButtonRender                 | `React.ReactNode`                                                                                                      |         | To render custom CTA Button in the footer                                                                                                  |
| customShortcuts                 | `(defaultShortcuts: RangeCalendarShorcutItem[], isValid: (value: DateValue) => boolean) => RangeCalendarShorcutItem[]` |         | This callback function is to render custom shortcuts. It has two params: `defaultShortcuts` and `isInvalid` for user to use                |
| onChange                        | `(e: RangeValue<MappedDateValue<DateValue>>) => void`                                                                  |         | The default value (uncontrolled).                                                                                                          |
| onCancel                        | `() => void`                                                                                                           |         | Callback that is called when the cancel button is triggered                                                                                |
| onApply                         | `(e: RangeValue<MappedDateValue<DateValue>>) => void`                                                                  |         | Callback that is called when the apply button is triggered                                                                                 |
| isDateUnavailable               | `(date: DateValue) => boolean`                                                                                         |         | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                                   |

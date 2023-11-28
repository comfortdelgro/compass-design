---
title: React Date Picker component
components: Date Picker
---

# Date Picker

<p class="description">DatePickers combine input and a Calendar popover to allow users to enter or select a date.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Import

```js
import {DatePicker} from '@comfortdelgro/react-compass'
```

### I18nProvider

I18nProvider allows you to override the default locale as determined by the browser/system setting with a locale defined by your application (e.g. application setting).
In this docs, we will use English(Singapore) `en-SG` as default locale

```js
import {Calendar} from '@comfortdelgro/react-compass'

const {
  I18nProvider
} = Calendar.I18N

<I18nProvider locale="en-SG">
  <App/>
</I18nProvider>

```

### Basic Date Picker

{{"demo": "DatePickerBasic.tsx"}}

### Controlled Date Picker

{{"demo": "DatePickerControlled.tsx"}}

### Granularity

The granularity prop allows you to control the smallest unit that is displayed by a DatePicker.

{{"demo": "DatePickerGranularity.tsx"}}

### Labeling

A visual label should be provided for the DatePicker using the label prop. If the DatePicker is required, the isRequired and necessityIndicator props can be used to show a required state.

{{"demo": "DatePickerLabeling.tsx"}}

### Validation

{{"demo": "DatePickerValidation.tsx"}}

### Disabled

{{"demo": "DatePickerisDisabled.tsx"}}

### Read Only

{{"demo": "DatePickerisReadOnly.tsx"}}

### Invalid

{{"demo": "DatePickerInvalid.tsx"}}

### IsMobile

Mobile variant of date picker will remove the ability of inputing values by hand, instead it will open calendar by default

{{"demo": "DatePickerIsMobile.tsx"}}

## Props

| Name                | Type                                             | Default | Description                                                                                                                                         |
| :------------------ | :----------------------------------------------- | :------ | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| calendarCSS         | `CSS`                                            |         | Style for calendar                                                                                                                                  |
| minValue            | `DateValue`                                      |         | The minimum allowed date that a user may select.                                                                                                    |
| maxValue            | `DateValue`                                      |         | The maximum allowed date that a user may select.                                                                                                    |
| granularity         | `'day' \| 'hour' \| 'minute' \| 'second'`        |         | Determines the smallest unit that is displayed in the date picker. By default, this is "day" for dates, and "minute" for times.                     |
| isReadOnly          | `boolean`                                        | false   | Whether the calendar value is immutable.                                                                                                            |
| isDisabled          | `boolean`                                        | false   | Whether the calendar is disabled.                                                                                                                   |
| value               | `DateValue`                                      |         | The current value (controlled).                                                                                                                     |
| defaultValue        | `DateValue`                                      |         | The default value (uncontrolled).                                                                                                                   |
| hourCycle           | `12                                       \| 24` |         | Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.                                           |
| label               | `React.ReactNode`                                |         | The content to display as the label.                                                                                                                |
| helperText          | `React.ReactNode`                                |         | The content to display as helper text                                                                                                               |
| necessityIndicator  | `'icon' \| 'label'`                              |         | Whether the required state should be shown as an icon or text.                                                                                      |
| shouldCloseOnSelect | `boolean`                                        | false   | Whether the overlay will close after selected. If `granularity` is selected, `shouldCloseOnSelect` will be set to `true` due to core library issues |
| isMobile            | `boolean`                                        | false   | Whether the overlay is in mobile variant.                                                                                                           |
| isOpen              | `boolean`                                        | false   | Whether the overlay is open by default (controlled).                                                                                                |
| defaultOpen         | `boolean`                                        | false   | Whether the overlay is open by default (uncontrolled).                                                                                              |
| onChange            | `(e: DateValue) => void`                         |         | The default value (uncontrolled).                                                                                                                   |
| onCancel            | `() => void`                                     |         | Callback that is called when the cancel button is triggered                                                                                         |
| isDateUnavailable   | `(date: DateValue) => boolean`                   |         | Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.                                            |

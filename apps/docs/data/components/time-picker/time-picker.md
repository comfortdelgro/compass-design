---
title: React Time Picker component
components: Time Picker
---

# Time Picker

<p class="description">TimePicker is used to let user select a time or input time.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

```jsx
import {TimePicker} from '@comfortdelgro/react-compass'
```

or

```jsx
import TimePicker from '@comfortdelgro/react-compass/time-picker'
```

## Basic

{{"demo": "TimePickerBasic.tsx"}}

## isDisabled

{{"demo": "TimePickerIsDisabled.tsx"}}

## isReadOnly

{{"demo": "TimePickerIsReadOnly.tsx"}}

## Uncontrolled with 12-hour system

{{"demo": "TimePickerUncontrolled12Hours.tsx"}}

## Controlled with 12-hour system

{{"demo": "TimePickerControlled12Hours.tsx"}}

## Uncontrolled with 24-hour system

{{"demo": "TimePickerUncontrolled24Hours.tsx"}}

## Controlled with 24-hour system

{{"demo": "TimePickerControlled24Hours.tsx"}}

## Props

| Name         | Type         | Default                              | Description                                                                                                                                                                                                                                                                 |
| :----------- | :----------- | :----------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| value        | `string`     | -                                    | The selected value. Used when the component is controlled.                                                                                                                                                                                                                  |
| defaultValue | `string`     | -                                    | The default value. Used when the component is not controlled.                                                                                                                                                                                                               |
| hourStep     | `number`     | `1`                                  | Step over hours.                                                                                                                                                                                                                                                            |
| minuteStep   | `number`     | `1`                                  | Step over minutes.                                                                                                                                                                                                                                                          |
| hasFooter    | `boolean`    | `True`                               | If true, displays the footer with OK button.                                                                                                                                                                                                                                |
| css          | `CSS`        | —                                    | The system prop that allows defining system overrides as well as additional CSS styles.                                                                                                                                                                                     |
| formatTime   | `string`     | `hh:mm AA`                           | Format of the date when rendered in the input(s). Defaults to localized format based on the used `views`<br />Example:<br />`format=HH:mm:ss` => `views=['hour24', 'minutes', 'seconds']`<br />`format=hh:mm:ss AA` => `views=['hour12', 'minutes', 'seconds', 'sessions']` |
| views        | `ViewType[]` | `['hours12', 'minutes', 'sessions']` | Available views. <br />`ViewType`: `hours12` \| `hours24` \| `minutes` \| `seconds` \| `sessions`                                                                                                                                                                           |
| onTimeChange | `Function`   | -                                    | Callback fired when the value changes.                                                                                                                                                                                                                                      |

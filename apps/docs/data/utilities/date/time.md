---
title: Time
---

# Time

<p class="description">A Time represents a clock time without any date components.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

A `Time` object represents a clock time without any date components. If you need to refer to a time on a specific date, use a [CalendarDateTime](CalendarDateTime.html) or [ZonedDateTime](ZonedDateTime.html) instead.

A `Time` can be created using the constructor. This example creates a time that represents 9:45 AM.

```tsx
import {Time} from '@comfortdelgro/react-compass-old'

let time = new Time(9, 45)
```

You can also create a `Time` by parsing an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string using the <TypeLink links={docs.links} type={docs.exports.parseTime} /> function.

```tsx
import {parseTime} from '@comfortdelgro/react-compass-old'

let time = parseTime('09:45')
```

Once you have a `Time` object, you can read its properties, or manipulate it as described in the [Manipulating times](#manipulating-times) section below. You can also convert it to an ISO 8601 string, or another representation. See the [Conversion](#conversion) section below for details.

```tsx
let time = new Time(9, 45)
time.toString() // '09:45:00'
```

## Properties & Methods

| Name        | Type                                                                          | Description                                                                                                                                          |
| :---------- | :---------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| hour        | `number`                                                                      | The hour, numbered from 0 to 23.                                                                                                                     |
|             |
| minute      | `number`                                                                      | The minute in the hour.                                                                                                                              |
|             |
| second      | `number`                                                                      | The second in the minute.                                                                                                                            |
|             |
| millisecond | `number`                                                                      | The millisecond in the second.                                                                                                                       |
| constructor | `( hour: number, minute: number, second: number, millisecond: number ): void` |                                                                                                                                                      |
| copy        | `(): Time`                                                                    | Returns a copy of this time.                                                                                                                         |
| add         | `(duration: TimeDuration): void	`                                              | Returns a new Time with the given duration added to it.                                                                                              |
| subtract    | `(duration: TimeDuration): void`                                              | Returns a new Time with the given duration subtracted from it.                                                                                       |
| set         | `(fields: TimeFields): void`                                                  | Returns a new Time with the given fields set to the provided values. Other fields will be constrained accordingly.                                   |
| cycle       | `( field: TimeField, amount: number, options?: CycleTimeOptions ): void`      | Returns a new Time with the given field adjusted by a specified amount. When the resulting value reaches the limits of the field, it wraps around.   |
| toString    | `(): void`                                                                    | Converts the time to an ISO 8601 formatted string.                                                                                                   |
| compare     | `(b: AnyTime): void`                                                          | Compares this time with another. A negative result indicates that this time is before the given one, and a positive time indicates that it is after. |
|             |

## Manipulating times

### Adding and subtracting durations

A `TimeDuration` is an object that represents an amount of time, with fields such as `hours`, `minutes`, and `seconds`. The `add` and `subtract` methods of `Time` objects can be used to adjust the time by the given duration. These methods return a new time, and do not mutate the original.

```tsx
let time = new Time(9, 45)
time.add({hours: 1}) // 10:45:00
time.add({minutes: 1}) // 09:46:00
time.add({seconds: 1}) // 09:45:01
```

Adding or subtracting a duration that goes beyond the limits of a particular field will cause the time to be _balanced_. For example, adding one minute to `09:59` results in `10:00`.

### Parsing durations

The `parseDuration` function can be used to convert a [ISO 8601 duration string](https://en.wikipedia.org/wiki/ISO_8601#Durations) into a `DateTimeDuration` object. The smallest time unit may include decimal values written with a comma or period, and negative values can be written by prefixing the entire string with a minus sign.

```tsx
parseDuration('PT20H35M15S')
// => {hours: 20, minutes: 35, seconds: 15}

parseDuration('-PT20H35M15S')
// =>  {hours: -20, minutes: -35, seconds: -15}

parseDuration('PT20H35M15,75S')
// => {hours: 20, minutes: 35, seconds: 15.75}
```

### Setting fields

`Time` objects are immutable, which means their properties cannot be set directly. Instead, use the `set` method, and pass the fields to be modified. This will return a new `Time` with the updated values.

```tsx
let time = new Time(9, 45)
time.set({hour: 12}) // 12:45
time.set({minute: 5}) // 9:05
```

Setting a field to a value that is outside the valid range will cause it to be _constrained_.

```tsx
let time = new Time(9, 45)
time.set({hour: 36}) // 23:45
time.set({minute: 75}) // 09:59
```

### Cycling fields

The `cycle` method allows incrementing or decrementing a single field. It is similar to the `add` and `subtract` methods, but when the value reaches the minimum or maximum, it wraps around rather than affecting other fields.

```tsx
let time = new Time(23, 59)
time.cycle('hour', 1) // 00:59
time.cycle('minute', 1) // 23:00

let time = new Time(0, 0)
time.cycle('hour', -1) // 23:00
time.cycle('minute', -1) // 00:59
```

The `round` option may also be passed, which causes the value to be rounded to increments of the given amount. For example, you could round the minute to increments of 15.

```tsx
let time = new Time(9, 22)

time.cycle('minute', 15) // 09:37
time.cycle('minute', 15, {round: true}) // 09:30

time.cycle('minute', -15) // 09:07
time.cycle('minute', -15, {round: true}) // 09:15
```

By default, the `hour` field is cycled within a 24 hour range. The `hourCycle` option can be set to `12` to use a 12 hour clock instead, which will preserve the AM/PM value when formatted.

```tsx
let time = new Time(11)
time.cycle('hour', 1) // 12:00
time.cycle('hour', 1, {hourCycle: 12}) // 00:00

let time = new Time(23)
time.cycle('hour', 1) // 00:00
time.cycle('hour', 1, {hourCycle: 12}) // 12:00
```

## Conversion

### To a string

`Time` objects can be converted to an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string using the `toString` method.

```tsx
let date = new Time(9, 45)
date.toString() // '09:45:00'
```

### To a date and time

A `Time` can be combined with a `CalendarDate` to produce a `CalendarDateTime` object using the `toCalendarDateTime` function.

```tsx
import {CalendarDate, toCalendarDateTime} from '@comfortdelgro/react-compass-old'

let date = new CalendarDate(2022, 2, 3)
let time = new Time(8, 30)

toCalendarDateTime(date, time) // 2022-02-03T08:30:00
```

A `CalendarDateTime` represents a date with a time, but not in any specific time zone. Use this type to represent times that occur at the same local time regardless of the time zone, such as the time of New Years Eve fireworks which always occur at midnight. Most times are better stored as a `ZonedDateTime`, which represents a date with a time in a specific time zone. Use this type to represent an exact moment in time at a particular location on Earth.

The `toZoned` function can be used to convert a `CalendarDateTime` to a `ZonedDateTime`.

```tsx
import {
  CalendarDate,
  toCalendarDateTime,
  toZoned,
} from '@comfortdelgro/react-compass-old'

let date = new CalendarDate(2022, 2, 3)
let time = new Time(8, 30)

let dateTime = toCalendarDateTime(date, time) // 2022-02-03T08:30:00
toZoned(dateTime, 'America/Los_Angeles') // 2021-02-03T08:30-07:00[America/Los_Angeles]
```

## Queries

### Comparison

`Time` objects can be compared in order to determine which time is before or after another using the `compare` method. It returns a number less than zero if the first time is before the second, zero if the values are equal, or a number greater than zero if the first time is after the second.

```tsx
let a = new Time(9, 45)
let b = new Time(12, 20)

a.compare(b) < 0 // true
b.compare(a) > 0 // true
```

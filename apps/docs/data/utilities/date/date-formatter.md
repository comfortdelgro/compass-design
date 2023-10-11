---
title: DateFormatter
---

# DateFormatter

<p class="description">A wrapper around Intl.DateTimeFormat that fixes various browser bugs, and polyfills new features.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`DateFormatter` is a wrapper around the native [Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) API. It exposes the same API, but works around several browser bugs and provides polyfills for newer features. These are currently:

- A simple polyfill for the `formatRange` and `formatRangeToParts` methods for older browsers.
- A workaround for a bug involving the `hour12` option in [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1045791) and and the [ECMAScript spec](https://github.com/tc39/ecma402/issues/402).
- A workaround for a bug involving the `hourCycle` option in [Safari](https://bugs.webkit.org/show_bug.cgi?id=229313).

See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat) for full details on how to use the API.

## Properties & Methods

| Name               | Type                                                          | Description                                                                                                                                                    |
| :----------------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| constructor        | `(locale: string, options: Intl.DateTimeFormatOptions): void` |                                                                                                                                                                |
| format             | `(value: Date): string`                                       | Returns a new CalendarDateTime with the given duration added to it.                                                                                            |
| formatToParts      | `(value: Date): Intl.DateTimeFormatPart[]`                    | Returns a new CalendarDateTime with the given duration subtracted from it.                                                                                     |
| formatRange        | `(start: Date, end: Date): string	`                            | Returns a new CalendarDateTime with the given fields set to the provided values. Other fields will be constrained accordingly.                                 |
| formatRangeToParts | `(start: Date, end: Date): DateRangeFormatPart[]`             | Returns a new CalendarDateTime with the given field adjusted by a specified amount. When the resulting value reaches the limits of the field, it wraps around. |
| resolvedOptions    | `(): ResolvedDateTimeFormatOptions`                           | Converts the date to a native JavaScript Date object in the given time zone.                                                                                   |

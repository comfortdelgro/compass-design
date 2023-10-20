---
title: NumberParser
---

# CalendarDateTime

<p class="description">A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.</p>

{{"component": "components/common/ComponentLinkHeader.tsx"}}

## Introduction

`NumberFormatter` is a wrapper around the native [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) API. It exposes the same API, but works around several browser bugs and provides polyfills for newer features. These are currently:

- A polyfill for the `signDisplay` option.
- A polyfill for the `unit` style, currently only for the `degree` unit in the `narrow` style

See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) for full details on how to use the API.

## Properties & Methods

| Method                                                                  | Description                                                                                          |
| ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| constructor(locale: string, options: NumberFormatOptions): void         |                                                                                                      |
| format(value: number): string                                           | Formats a number value as a string, according to the locale and options provided to the constructor. |
| formatToParts(value: number): Intl.NumberFormatPart[]                   | Formats a number range as a string.                                                                  |
| formatRange(start: number, end: number): string                         | Formats a number range as a string.                                                                  |
| formatRangeToParts(start: number, end: number): NumberRangeFormatPart[] | Formats a number range as an array of parts.                                                         |
| resolvedOptions(): Intl.ResolvedNumberFormatOptions                     | Returns the resolved formatting options based on the values passed to the constructor.               |

|

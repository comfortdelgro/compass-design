---
title: NumberParser
---

# CalendarDateTime

<p class="description">A NumberParser can be used to perform locale-aware parsing of numbers from Unicode strings, as well as validation of partial user input.</p>


## Introduction

Numbers can be formatted in many different ways, including percentages, units, decimals, currencies, and more. In addition, number formatting varies around the world. For example, currency symbols, units, decimal separators, and even digits themselves may be different across languages and regions. While Latin numerals are the most commonly used, many other numbering systems are also used around the world. For example, in the Latin numbering system, the number twelve is represented as “12”, and in the Arabic decimal system, it is “١٢”.

`NumberParser` is designed to validate and parse numbers from user input according to a specific locale and format. It supports several different numbering systems including the Latin, Arabic, and Han positional numbering systems, as well as parsing decimals, percentages, currencies, and unit values. The numbering system is automatically detected from the input string. This means that users may input numbers in a different numbering system than the default for their locale, e.g. a Latin number in an Arabic locale.

Parsing numbers while taking into account all locale-specific detail is quite complex and error-prone. `NumberParser` uses information about the locale and expected format for a number in order to parse it correctly. This means it is somewhat strict about the accepted formats. It is not designed to handle use cases where the user can enter numbers in an unknown format (e.g. either a unit value _or_ a percentage), this must be known up front or selected via an external UI control.

### Example

To create a `NumberParser`, call the constructor with a locale string and optional format options. The same options as supported by the `Intl.NumberFormat` object are supported. See the docs on MDN linked above for full details.

This example creates a parser than accepts values in inches in the `en-US` locale.

```tsx
import {NumberParser} from '@comfortdelgro/react-compass'

let parser = new NumberParser('en-US', {style: 'unit', unit: 'inch'})
parser.parse('10 in') // 10
```

## Properties & Methods

| Method                                                               | Description                                                                             |
| -------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| constructor(locale: string, options: Intl.NumberFormatOptions): void |                                                                                         |
| parse(value: string): number                                         | Parses the given string to a number. Returns NaN if a valid number could not be parsed. |

| isValidPartialNumber(
value: string,
minValue?: number,
maxValue?: number
): boolean | Returns whether the given string could potentially be a valid number. This should be used to validate user input as the user types. If a minValue or maxValue is provided, the validity of the minus/plus sign characters can be checked. |
| getNumberingSystem(value: string): string | Returns a numbering system for which the given string is valid in the current locale. If no numbering system could be detected, the default numbering system for the current locale is returned. |

## Parsing

Numbers can be parsed using the `parse` method. If the input is not a valid number according to the locale and format options, `NaN` is returned instead.

### Decimals

By default, or with the `style: 'decimal'` option, `NumberParser` supports parsing decimal values.

```tsx
let parser = new NumberParser('en-US')
parser.parse('10.5') // 10.5
parser.parse('-25.6') // -25.6
parser.parse('1,000,000') // 1000000
parser.parse('١٢') // 12
parser.parse('X') // NaN
```

### Percentages

The `style: 'percent'` option can be provided to the constructor to parse percentage values. In this mode, parsed values are divided by 100, for example the string `"45%"` is parsed as `0.45`. The `maximumFractionDigits` option is also taken into account during parsing, and the resulting value is rounded accordingly.

```tsx
let parser = new NumberParser('en-US', {
  style: 'percent',
  maximumFractionDigits: 2,
})

parser.parse('45%') // 0.45
parser.parse('62.3333%') // 0.6233
```

### Currency values

The `style: 'currency'` option can be provided to the constructor to parse currency values. The `currency` option must also be passed to set the currency code (e.g. `USD`) to use. In addition, the `currencyDisplay` option can be used to choose whether to display the currency symbol, currency code, or currency name. Finally, the `currencySign` option can be set to `accounting` to use accounting notation for negative numbers, which uses parentheses rather than a minus sign in some locales.

Note that partial input is not accepted by this method. For example, if a partial currency symbol is included in the string, `NaN` will be returned. The `isValidPartialNumber` method, described below, can be used in scenarios where you have partial user input.

```tsx
let parser = new NumberParser('en-US', {
  style: 'currency',
  currency: 'EUR',
  currencyDisplay: 'code',
  currencySign: 'accounting',
})

parser.parse('45') // 45
parser.parse('EUR 45') // 45
parser.parse('EUR 26.45') // 26.45
parser.parse('EUR -25') // -25
parser.parse('(EUR 25)') // -25
parser.parse('EU 45') // NaN (partial currency symbol)
parser.parse('$45') // NaN (different currency symbol)
```

### Unit values

The `style: 'unit'` option can be passed to the constructor to parse values with a unit of measurement. The `unit` option must also be passed to set which unit to use (e.g. `inch`). In addition, the `unitDisplay` option can be used to choose whether the unit is accepted in long, short, or narrow format.

```tsx
let parser = new NumberParser('en-US', {
  style: 'unit',
  unit: 'inch',
  unitDisplay: 'long',
})

parser.parse('12') // 12
parser.parse('12 inches') // 12
parser.parse('1 inch') // 1
parser.parse('12 in') // NaN (partial unit)
parser.parse('23 ft') // NaN (different unit)
```

## Validation

`NumberParser` can also be used to validate partial user input using the `isValidPartialNumber` method, for example, as the user types into an input field. The `parse` method only accepts complete input, whereas `isValidPartialNumber` determines if the given input _might_ be valid but incomplete. For example, only entering a decimal point is invalid when passed to `parse`, but accepted by `isValidPartialNumber`.

Note that partial units and currency symbols are _not_ accepted. Since the unit itself must be known upfront and passed to the constructor, it is better to only allow entering a number rather and autocompleting the unit rather than typing it in one letter at a time.

```tsx
let parser = new NumberParser('en-US', {style: 'unit', unit: 'inch'})
parser.isValidPartialNumber('.') // true
parser.isValidPartialNumber('.2') // true
parser.isValidPartialNumber('10 in') // true
parser.isValidPartialNumber('10 i') // false
parser.isValidPartialNumber('10 x') // false
```

## Detecting the numbering system

Under the hood, `NumberParser` automatically detects the numbering system used in the input. This is also exposed by the `getNumberingSystem` method, which returns a Unicode script identifier. For example, this can be used to create a number formatter based on the numbering system used in the input.

```tsx
import {NumberFormatter, NumberParser} from '@internationalized/number'

let parser = new NumberParser('en-US', {style: 'decimal'})
let numberingSystem = parser.getNumberingSystem('١٢') // -> 'arab'

let formatter = new NumberFormatter('en-US', {
  style: 'decimal',
  numberingSystem,
})
formatter.format(12)
```

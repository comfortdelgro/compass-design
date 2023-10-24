/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

const formatterCache = new Map<string, Intl.NumberFormat>()

let supportsSignDisplay = false
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  supportsSignDisplay =
    new Intl.NumberFormat('de-DE', {
      signDisplay: 'exceptZero',
    }).resolvedOptions().signDisplay === 'exceptZero'
  // eslint-disable-next-line no-empty
} catch (e) {}

let supportsUnit = false
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  supportsUnit =
    new Intl.NumberFormat('de-DE', {
      style: 'unit',
      unit: 'degree',
    }).resolvedOptions().style === 'unit'
  // eslint-disable-next-line no-empty
} catch (e) {}

// Polyfill for units since Safari doesn't support them yet. See https://bugs.webkit.org/show_bug.cgi?id=215438.
// Currently only polyfilling the unit degree in narrow format for ColorSlider in our supported locales.
// Values were determined by switching to each locale manually in Chrome.
const UNITS = {
  degree: {
    narrow: {
      default: '°',
      'ja-JP': ' 度',
      'zh-TW': '度',
      'sl-SI': ' °',
      // Arabic?? But Safari already doesn't use Arabic digits so might be ok...
      // https://bugs.webkit.org/show_bug.cgi?id=218139
    },
  },
}

export interface NumberFormatOptions extends Intl.NumberFormatOptions {
  /** Overrides default numbering system for the current locale. */
  numberingSystem?: string
}

interface NumberRangeFormatPart extends Intl.NumberFormatPart {
  source: 'startRange' | 'endRange' | 'shared'
}

/**
 * A wrapper around Intl.NumberFormat providing additional options, polyfills, and caching for performance.
 */
export class NumberFormatter implements Intl.NumberFormat {
  private numberFormatter: Intl.NumberFormat
  private options: NumberFormatOptions

  constructor(locale: string, options: NumberFormatOptions = {}) {
    this.numberFormatter = getCachedNumberFormatter(locale, options)
    this.options = options
  }

  /** Formats a number value as a string, according to the locale and options provided to the constructor. */
  format(value: number): string {
    let res = ''
    if (!supportsSignDisplay && this.options.signDisplay != null) {
      res = numberFormatSignDisplayPolyfill(
        this.numberFormatter,
        this.options.signDisplay,
        value,
      )
    } else {
      res = this.numberFormatter.format(value)
    }

    if (this.options.style === 'unit' && !supportsUnit) {
      const resolvedOptions = this.resolvedOptions()
      const unit = resolvedOptions.unit as keyof typeof UNITS
      const unitDisplay =
        (resolvedOptions.unitDisplay as keyof typeof UNITS.degree) ?? 'short'
      const locale = resolvedOptions.locale as keyof typeof UNITS.degree.narrow
      const values = UNITS[unit]?.[unitDisplay]
      res += values[locale] || values.default
    }

    return res
  }

  /** Formats a number to an array of parts such as separators, digits, punctuation, and more. */
  formatToParts(value: number): Intl.NumberFormatPart[] {
    // TODO: implement signDisplay for formatToParts
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.numberFormatter.formatToParts(value)
  }

  /** Formats a number range as a string. */
  formatRange(start: number, end: number): string {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof this.numberFormatter.formatRange === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.numberFormatter.formatRange(start, end)
    }

    if (end < start) {
      throw new RangeError('End date must be >= start date')
    }

    // Very basic fallback for old browsers.
    return `${this.format(start)} – ${this.format(end)}`
  }

  /** Formats a number range as an array of parts. */
  formatRangeToParts(start: number, end: number): NumberRangeFormatPart[] {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof this.numberFormatter.formatRangeToParts === 'function') {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return this.numberFormatter.formatRangeToParts(start, end)
    }

    if (end < start) {
      throw new RangeError('End date must be >= start date')
    }

    const startParts = this.numberFormatter.formatToParts(start)
    const endParts = this.numberFormatter.formatToParts(end)
    return [
      ...startParts.map(
        (p) => ({...p, source: 'startRange'} as NumberRangeFormatPart),
      ),
      {type: 'literal', value: ' – ', source: 'shared'},
      ...endParts.map(
        (p) => ({...p, source: 'endRange'} as NumberRangeFormatPart),
      ),
    ]
  }

  /** Returns the resolved formatting options based on the values passed to the constructor. */
  resolvedOptions(): Intl.ResolvedNumberFormatOptions {
    let options = this.numberFormatter.resolvedOptions()
    if (!supportsSignDisplay && this.options.signDisplay != null) {
      options = {...options, signDisplay: this.options.signDisplay}
    }

    if (!supportsUnit && this.options.style === 'unit') {
      options = {
        ...options,
        style: 'unit',
        unit: this.options.unit as keyof typeof UNITS,
        unitDisplay: this.options.unitDisplay as keyof typeof UNITS.degree,
      }
    }

    return options
  }
}

function getCachedNumberFormatter(
  locale: string,
  options: NumberFormatOptions = {},
): Intl.NumberFormat {
  const {numberingSystem} = options
  if (numberingSystem && locale.indexOf('-u-nu-') === -1) {
    locale = `${locale}-u-nu-${numberingSystem}`
  }

  if (options.style === 'unit' && !supportsUnit) {
    // let {unit, unitDisplay = 'short'} = options
    const unit = options.unit as keyof typeof UNITS
    const unitDisplay =
      (options.unitDisplay as keyof typeof UNITS.degree) ?? 'short'
    if (!unit) {
      throw new Error('unit option must be provided with style: "unit"')
    }
    if (!UNITS[unit]?.[unitDisplay]) {
      throw new Error(
        `Unsupported unit ${unit} with unitDisplay = ${unitDisplay}`,
      )
    }
    options = {...options, style: 'decimal'}
  }

  const cacheKey =
    locale +
    (options
      ? Object.entries(options)
          .sort((a, b) => (a[0] < b[0] ? -1 : 1))
          .join()
      : '')
  if (formatterCache.has(cacheKey)) {
    return formatterCache.get(cacheKey) as Intl.NumberFormat
  }

  const numberFormatter = new Intl.NumberFormat(locale, options)
  formatterCache.set(cacheKey, numberFormatter)
  return numberFormatter
}

/** @private - exported for tests */
export function numberFormatSignDisplayPolyfill(
  numberFormat: Intl.NumberFormat,
  signDisplay: string,
  num: number,
) {
  if (signDisplay === 'auto') {
    return numberFormat.format(num)
  } else if (signDisplay === 'never') {
    return numberFormat.format(Math.abs(num))
  } else {
    let needsPositiveSign = false
    if (signDisplay === 'always') {
      needsPositiveSign = num > 0 || Object.is(num, 0)
    } else if (signDisplay === 'exceptZero') {
      if (Object.is(num, -0) || Object.is(num, 0)) {
        num = Math.abs(num)
      } else {
        needsPositiveSign = num > 0
      }
    }

    if (needsPositiveSign) {
      const negative = numberFormat.format(-num)
      const noSign = numberFormat.format(num)
      // ignore RTL/LTR marker character
      const minus = negative.replace(noSign, '').replace(/\u200e|\u061C/, '')
      if ([...minus].length !== 1) {
        console.warn(
          '@react-aria/i18n polyfill for NumberFormat signDisplay: Unsupported case',
        )
      }
      const positive = negative
        .replace(noSign, '!!!')
        .replace(minus, '+')
        .replace('!!!', noSign)
      return positive
    } else {
      return numberFormat.format(num)
    }
  }
}

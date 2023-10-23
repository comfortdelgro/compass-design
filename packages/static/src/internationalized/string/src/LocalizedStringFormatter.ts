/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import type {LocalizedStringDictionary} from './LocalizedStringDictionary'

export type Variables = Record<string, string | number | boolean> | undefined
export type LocalizedString =
  | string
  | ((
      args: Variables,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      formatter?: LocalizedStringFormatter<any, any>,
    ) => string)
type InternalString = string | (() => string)

const pluralRulesCache = new Map<string, Intl.PluralRules>()
const numberFormatCache = new Map<string, Intl.NumberFormat>()

/**
 * Formats localized strings from a LocalizedStringDictionary. Supports interpolating variables,
 * selecting the correct pluralization, and formatting numbers for the locale.
 */
export class LocalizedStringFormatter<
  K extends string = string,
  T extends LocalizedString = string,
> {
  private locale: string
  private strings: LocalizedStringDictionary<K, T>

  constructor(locale: string, strings: LocalizedStringDictionary<K, T>) {
    this.locale = locale
    this.strings = strings
  }

  /** Formats a localized string for the given key with the provided variables. */
  format(key: K, variables?: Variables): string {
    const message = this.strings.getStringForLocale(key, this.locale)
    return typeof message === 'function' ? message(variables, this) : message
  }

  protected plural(
    count: number,
    options: Record<string, InternalString>,
    type: Intl.PluralRuleType = 'cardinal',
  ) {
    let opt = options['=' + count]
    if (opt) {
      return typeof opt === 'function' ? opt() : opt
    }

    const key = this.locale + ':' + type
    let pluralRules = pluralRulesCache.get(key)
    if (!pluralRules) {
      pluralRules = new Intl.PluralRules(this.locale, {type})
      pluralRulesCache.set(key, pluralRules)
    }

    const selected = pluralRules.select(count)
    opt = options[selected] || options['other']
    return typeof opt === 'function' ? opt() : opt
  }

  protected number(value: number) {
    let numberFormat = numberFormatCache.get(this.locale)
    if (!numberFormat) {
      numberFormat = new Intl.NumberFormat(this.locale)
      numberFormatCache.set(this.locale, numberFormat)
    }
    return numberFormat.format(value)
  }

  protected select(options: Record<string, InternalString>, value: string) {
    const opt = options[value] || options['other']
    return typeof opt === 'function' ? opt() : opt
  }
}

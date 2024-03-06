/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import type {LocalizedString} from './LocalizedStringFormatter'

export type LocalizedStrings<K extends string, T extends LocalizedString> = {
  [lang: string]: Record<K, T>
}

/**
 * Stores a mapping of localized strings. Can be used to find the
 * closest available string for a given locale.
 */
export class LocalizedStringDictionary<
  K extends string = string,
  T extends LocalizedString = string,
> {
  private strings: LocalizedStrings<K, T>
  private defaultLocale: string

  constructor(
    messages: LocalizedStrings<K, T>,
    defaultLocale: string = 'en-US',
  ) {
    // Clone messages so we don't modify the original object.
    this.strings = {...messages}
    this.defaultLocale = defaultLocale
  }

  /** Returns a localized string for the given key and locale. */
  getStringForLocale(key: K, locale: string): T {
    let strings = this.strings[locale] as Record<K, T>
    if (!strings) {
      strings = getStringsForLocale(
        locale,
        this.strings,
        this.defaultLocale,
      ) as Record<K, T>
      this.strings[locale] = strings
    }

    const string = strings[key]
    if (!string) {
      throw new Error(`Could not find intl message ${key} in ${locale} locale`)
    }

    return string
  }
}

function getStringsForLocale<K extends string, T extends LocalizedString>(
  locale: string,
  strings: LocalizedStrings<K, T>,
  defaultLocale = 'en-US',
) {
  // If there is an exact match, use it.
  if (strings[locale]) {
    return strings[locale]
  }

  // Attempt to find the closest match by language.
  // For example, if the locale is fr-CA (French Canadian), but there is only
  // an fr-FR (France) set of strings, use that.
  // This could be replaced with Intl.LocaleMatcher once it is supported.
  // https://github.com/tc39/proposal-intl-localematcher
  const language = getLanguage(locale) as string
  if (strings[language]) {
    return strings[language]
  }

  for (const key in strings) {
    if (key.startsWith(language + '-')) {
      return strings[key]
    }
  }

  // Nothing close, use english.
  return strings[defaultLocale]
}

function getLanguage(locale: string) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (Intl.Locale) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return new Intl.Locale(locale).language
  }

  return locale.split('-')[0]
}

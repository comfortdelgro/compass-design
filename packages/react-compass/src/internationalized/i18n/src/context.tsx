/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import React, {ReactNode, useContext, useEffect, useState} from 'react'

export interface I18nProviderProps {
  /** Contents that should have the locale applied. */
  children: ReactNode
  /** The locale to apply to the children. */
  locale?: string
}

export interface Locale {
  /** The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale. */
  locale: string
  /** The writing direction for the locale. */
  direction: Direction
}
export type Direction = 'ltr' | 'rtl'
interface SSRContextValue {
  prefix: string
  current: number
  isSSR: boolean
}
interface NavigatorLanguage {
  userLanguage?: string
}
const I18nContext = React.createContext<Locale | null>(null)

/**
 * Provides the locale for the application to all child components.
 */
export function I18nProvider(props: I18nProviderProps) {
  const {locale, children} = props
  const defaultLocale = useDefaultLocale()

  const value: Locale = locale
    ? {
        locale,
        direction: isRTL(locale) ? 'rtl' : 'ltr',
      }
    : defaultLocale

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

/**
 * Returns the current locale and layout direction.
 */
export function useLocale(): Locale {
  const defaultLocale = useDefaultLocale()
  const context = useContext(I18nContext)
  return context || defaultLocale
}

/**
 * Returns the current browser/system language, and updates when it changes.
 */
export function useDefaultLocale(): Locale {
  const isSSR = useIsSSR()
  const [defaultLocale, setDefaultLocale] = useState(currentLocale)

  useEffect(() => {
    if (listeners.size === 0) {
      window.addEventListener('languagechange', updateLocale)
    }

    listeners.add(setDefaultLocale)

    return () => {
      listeners.delete(setDefaultLocale)
      if (listeners.size === 0) {
        window.removeEventListener('languagechange', updateLocale)
      }
    }
  }, [])

  // We cannot determine the browser's language on the server, so default to
  // en-US. This will be updated after hydration on the client to the correct value.
  if (isSSR) {
    return {
      locale: 'en-US',
      direction: 'ltr',
    }
  }

  return defaultLocale
}

// https://en.wikipedia.org/wiki/Right-to-left
const RTL_SCRIPTS = new Set([
  'Arab',
  'Syrc',
  'Samr',
  'Mand',
  'Thaa',
  'Mend',
  'Nkoo',
  'Adlm',
  'Rohg',
  'Hebr',
])
const RTL_LANGS = new Set([
  'ae',
  'ar',
  'arc',
  'bcc',
  'bqi',
  'ckb',
  'dv',
  'fa',
  'glk',
  'he',
  'ku',
  'mzn',
  'nqo',
  'pnb',
  'ps',
  'sd',
  'ug',
  'ur',
  'yi',
])

/**
 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */
export function isRTL(locale: string) {
  // If the Intl.Locale API is available, use it to get the script for the locale.
  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (Intl.Locale) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const script = new Intl.Locale(locale).maximize().script as string
    return RTL_SCRIPTS.has(script)
  }

  // If not, just guess by the language (first part of the locale)
  const lang = locale.split('-')[0] as string
  return RTL_LANGS.has(lang)
}

const defaultContext: SSRContextValue = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0,
  isSSR: false,
}

const SSRContext = React.createContext<SSRContextValue>(defaultContext)

export function useIsSSR(): boolean {
  const cur = useContext(SSRContext)
  return cur.isSSR
}

/**
 * Gets the locale setting of the browser.
 */
export function getDefaultLocale(): Locale {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let locale =
    (typeof navigator !== 'undefined' &&
      (navigator.language || (navigator as NavigatorLanguage).userLanguage)) ||
    'en-US'
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Intl.DateTimeFormat.supportedLocalesOf([locale])
  } catch (_err) {
    locale = 'en-US'
  }
  return {
    locale,
    direction: isRTL(locale) ? 'rtl' : 'ltr',
  }
}

let currentLocale = getDefaultLocale()
const listeners = new Set<(locale: Locale) => void>()
function updateLocale() {
  currentLocale = getDefaultLocale()
  for (const listener of listeners) {
    listener(currentLocale)
  }
}

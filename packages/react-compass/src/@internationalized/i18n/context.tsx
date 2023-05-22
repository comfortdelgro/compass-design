import React, {
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import {useCounter} from '../../calendar/hooks/useSSRSafeId'

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
interface NavigatorLanguage {
  userLanguage?: string
}
interface SSRContextValue {
  prefix: string
  current: number
  isSSR: boolean
}
export interface SSRProviderProps {
  /** Your application here. */
  children: ReactNode
}
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

const defaultContext: SSRContextValue = {
  prefix: String(Math.round(Math.random() * 10000000000)),
  current: 0,
  isSSR: false,
}

/**
 * Determines if a locale is read right to left using [Intl.Locale]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale}.
 */
export function isRTL(locale: string) {
  // If the Intl.Locale API is available, use it to get the script for the locale.
  // This is more accurate than guessing by language, since languages can be written in multiple scripts.
  // @ts-ignore
  if (Intl.Locale) {
    // @ts-ignore
    let script = new Intl.Locale(locale).maximize().script
    if (script !== undefined) {
      return RTL_SCRIPTS.has(script)
    }
  }

  // If not, just guess by the language (first part of the locale)
  let lang = locale.split('-')[0]
  if (lang !== undefined) {
    return RTL_LANGS.has(lang)
  }

  //   return false
}

const I18nContext = React.createContext<Locale | null>(null)

export function I18nProvider(props: I18nProviderProps) {
  let {locale, children} = props
  let defaultLocale = useDefaultLocale()

  let value: Locale = locale
    ? {
        locale,
        direction: isRTL(locale) ? 'rtl' : 'ltr',
      }
    : defaultLocale

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
export function useLocale(): Locale {
  let defaultLocale = useDefaultLocale()
  let context = useContext(I18nContext)
  return context || defaultLocale
}
export function getDefaultLocale(): Locale {
  // @ts-ignore
  let locale =
    (typeof navigator !== 'undefined' &&
      (navigator.language || (navigator as NavigatorLanguage).userLanguage)) ||
    'en-US'
  try {
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
let listeners = new Set<(locale: Locale) => void>()

function updateLocale() {
  currentLocale = getDefaultLocale()
  for (let listener of listeners) {
    listener(currentLocale)
  }
}

/**
 * Returns the current browser/system language, and updates when it changes.
 */
export function useDefaultLocale(): Locale {
  let isSSR = useIsSSR()
  let [defaultLocale, setDefaultLocale] = useState(currentLocale)

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

const SSRContext = React.createContext<SSRContextValue>(defaultContext)

export function useIsSSR(): boolean {
  let cur = useContext(SSRContext)
  return cur.isSSR
}

export function SSRProvider(props: SSRProviderProps): JSX.Element {
  let cur = useContext(SSRContext)
  let counter = useCounter(cur === defaultContext)
  let [isSSR, setIsSSR] = useState(true)
  let value: SSRContextValue = useMemo(
    () => ({
      // If this is the first SSRProvider, start with an empty string prefix, otherwise
      // append and increment the counter.
      prefix: cur === defaultContext ? '' : `${cur.prefix}-${counter}`,
      current: 0,
      isSSR,
    }),
    [cur, counter, isSSR],
  )

  // If on the client, and the component was initially server rendered,
  // then schedule a layout effect to update the component after hydration.
  if (typeof window !== 'undefined') {
    // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useLayoutEffect(() => {
      setIsSSR(false)
    }, [])
  }

  return (
    <SSRContext.Provider value={value}>{props.children}</SSRContext.Provider>
  )
}

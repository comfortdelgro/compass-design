import camelCase from 'lodash/camelCase'
import upperFirst from 'lodash/upperFirst'

function pascalCase(str: string) {
  return upperFirst(camelCase(str))
}

function titleize(hyphenedString: string): string {
  return upperFirst(hyphenedString.split('-').join(' '))
}

export interface Page {
  pathname: string
  query?: object
  subheader?: string
  title?: string | false
}

export function pageToTitle(page: Page): string | null {
  if (page.title === false) {
    return null
  }

  if (page.title) {
    return page.title
  }

  const path = page.subheader || page.pathname
  const name = path
    .replace(/.*\//, '')
    .replace('react-', '')
    .replace(/\..*/, '')

  // TODO remove post migration
  if (path.indexOf('/api-docs/') !== -1) {
    return pascalCase(name)
  }

  // TODO support more than React component API (PascalCase)
  if (path.indexOf('/api/') !== -1) {
    return name.startsWith('use') ? camelCase(name) : pascalCase(name)
  }

  return titleize(name)
}

export type Translate = (
  id: string,
  options?: Partial<{ignoreWarning: boolean}>,
) => string

/**
 * Get the value of a cookie
 * Source: https://vanillajstoolkit.com/helpers/getcookie/
 * @param name - The name of the cookie
 * @return The cookie value
 */
export function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') {
    throw new Error(
      'getCookie() is not supported on the server. Fallback to a different value when rendering on the server.',
    )
  }

  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    return parts[1].split(';').shift()
  }

  return undefined
}

/**
 * as is a reference to Next.js's as, the path in the URL
 * pathname is a reference to Next.js's pathname, the name of page in the filesystem
 * https://nextjs.org/docs/api-reference/next/router
 */
export function pathnameToLanguage(pathname: string): {
  canonicalAs: string
  canonicalAsServer: string
  canonicalPathname: string
} {
  const canonicalAs = pathname
  // Remove hash as it's never sent to the server
  // https://github.com/vercel/next.js/issues/25202
  const canonicalAsServer = canonicalAs.replace(/#(.*)$/, '')
  const canonicalPathname = canonicalAsServer
    .replace(/^\/api/, '/api-docs')
    .replace(/\/$/, '')

  return {
    canonicalAs,
    canonicalAsServer,
    canonicalPathname,
  }
}

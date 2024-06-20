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

export const getStaticPath = (path: string) => {
  if (process.env.NODE_ENV === 'production') {
    return `/compass-design${path}`
  } else return path
}

export function shouldHandleLinkClick(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  ) {
    return true
  }
  return false
}

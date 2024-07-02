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

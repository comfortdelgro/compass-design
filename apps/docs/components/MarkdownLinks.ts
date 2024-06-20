import Router from 'next/router'
import * as React from 'react'
import {pathnameToLanguage, shouldHandleLinkClick} from 'utils'

function handleClick(event: any) {
  let activeElement = event.target
  while (
    activeElement?.nodeType === Node.ELEMENT_NODE &&
    activeElement.nodeName !== 'A'
  ) {
    activeElement = activeElement.parentElement
  }

  // Ignore non internal link clicks
  if (
    activeElement === null ||
    activeElement.nodeName !== 'A' ||
    activeElement.getAttribute('target') === '_blank' ||
    activeElement.getAttribute('data-no-markdown-link') === 'true' ||
    activeElement.getAttribute('href').indexOf('/') !== 0
  ) {
    return
  }

  // Ignore click meant for native link handling, e.g. open in new tab
  if (shouldHandleLinkClick(event)) {
    return
  }

  event.preventDefault()
  const as = activeElement.getAttribute('href')
  const canonicalPathname = pathnameToLanguage(as).canonicalPathname
  Router.push(canonicalPathname, as)
}

export default function MarkdownLinks() {
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.addEventListener('click', handleClick)
    }
  }, [])

  return null
}

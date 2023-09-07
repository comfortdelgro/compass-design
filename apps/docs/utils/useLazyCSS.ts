import {loadCSS} from 'fg-loadcss/src/loadCSS'
import * as React from 'react'

export default function useLazyCSS(href, before) {
  React.useEffect(() => {
    const link = loadCSS(href, document.querySelector(before))
    return () => {
      link.parentElement.removeChild(link)
    }
  }, [href, before])
}

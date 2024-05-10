import {CSSProperties} from 'react'

export function updateElementStyles(
  element: HTMLElement,
  styles: CSSProperties & {[key: string]: string},
) {
  for (const [key, value] of Object.entries(styles)) {
    element.style.setProperty(key, value)
  }
}

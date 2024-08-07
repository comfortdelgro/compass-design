import copy from 'clipboard-copy'
import {useRouter} from 'next/router'
import React from 'react'

function hasNativeSelection(element: HTMLTextAreaElement) {
  if (window.getSelection()?.toString()) {
    return true
  }

  // window.getSelection() returns an empty string in Firefox for selections inside a form element.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=85686.
  // Instead, we can use element.selectionStart that is only defined on form elements.
  if (
    element &&
    (element.selectionEnd || 0) - (element.selectionStart || 0) > 0
  ) {
    return true
  }

  return false
}

export default function useCodeCopyEvent() {
  const rootNode = React.useRef<HTMLElement | null>(null)
  const router = useRouter()
  React.useEffect(() => {
    let key = 'Ctrl + '
    if (typeof window !== 'undefined') {
      const macOS = window.navigator.platform.toUpperCase().indexOf('MAC') >= 0
      if (macOS) {
        key = '⌘'
      }
    }
    const listeners: Array<() => void> = []
    const codeRoots = document.getElementsByClassName(
      'cdg-root',
    ) as HTMLCollectionOf<HTMLDivElement>

    if (codeRoots !== null) {
      Array.from(codeRoots).forEach((elm) => {
        const handleMouseEnter = () => {
          rootNode.current = elm
        }

        elm.addEventListener('mouseenter', handleMouseEnter)
        listeners.push(() =>
          elm.removeEventListener('mouseenter', handleMouseEnter),
        )

        const handleMouseLeave = () => {
          if (rootNode.current === elm) {
            const copyElement = rootNode.current.querySelector(
              '.cdg-copy',
            ) as HTMLElement
            copyElement?.blur()
            rootNode.current = null
          }
        }
        elm.addEventListener('mouseleave', handleMouseLeave)
        listeners.push(() =>
          elm.removeEventListener('mouseleave', handleMouseLeave),
        )

        const handleFocusin = () => {
          // use `focusin` because it bubbles from the copy button
          rootNode.current = elm
        }
        elm.addEventListener('focusin', handleFocusin)
        listeners.push(() => elm.removeEventListener('focusin', handleFocusin))

        const handleFocusout = () => {
          // use `focusout` because it bubbles from the copy button
          if (rootNode.current === elm) {
            rootNode.current = null
          }
        }
        elm.addEventListener('focusout', handleFocusout)
        listeners.push(() =>
          elm.removeEventListener('focusout', handleFocusout),
        )

        async function handleClick(event: MouseEvent) {
          const trigger = event.currentTarget as HTMLButtonElement
          const pre = (event.currentTarget as Element)
            ?.previousElementSibling as Element
          const textNode = trigger.childNodes[0]
          textNode.nodeValue =
            textNode.textContent?.replace('Copy', 'Copied') || null
          trigger.dataset.copied = 'true'
          setTimeout(() => {
            if (trigger) {
              textNode.nodeValue =
                textNode.textContent?.replace('Copied', 'Copy') || null
              delete trigger.dataset.copied
            }
          }, 2000)
          try {
            if (pre.textContent) {
              await copy(pre.textContent)
            }
            // eslint-disable-next-line no-empty
          } catch (error) {}
        }

        const btn = elm.querySelector('.cdg-copy') as HTMLButtonElement | null
        if (btn) {
          const keyNode = btn.querySelector('.cdg-copyKeypress')?.childNodes[1]
          if (!keyNode) {
            // skip the logic if the btn is not generated from the markdown.
            return
          }
          keyNode.textContent =
            keyNode?.textContent?.replace('$key', key) || null
          btn.addEventListener('click', handleClick)
          listeners.push(() => btn.removeEventListener('click', handleClick))
        }
      })

      const linkRoots = document.getElementsByClassName(
        'anchor-link',
      ) as HTMLCollectionOf<HTMLAnchorElement>

      if (linkRoots !== null) {
        Array.from(linkRoots).forEach((elm) => {
          async function handleClick() {
            try {
              if (elm.href) {
                await copy(elm.href)
              }
              // eslint-disable-next-line no-empty
            } catch (error) {}
          }
          elm.addEventListener('click', handleClick)
          listeners.push(() => elm.addEventListener('click', handleClick))
        })
      }

      return () => {
        listeners.forEach((removeEventListener) => {
          removeEventListener()
        })
      }
    }

    return undefined
  }, [rootNode, router.pathname])

  React.useEffect(() => {
    document.addEventListener('keydown', (event) => {
      if (hasNativeSelection(event.target as HTMLTextAreaElement)) {
        // Skip if user is highlighting a text.
        return
      }
      // event.key === 'c' is not enough as alt+c can lead to ©, ç, or other characters on macOS.
      // event.code === 'KeyC' is not enough as event.code assume a QWERTY keyboard layout which would
      // be wrong with a Dvorak keyboard (as if pressing J).
      const isModifierKeyPressed =
        event.ctrlKey || event.metaKey || event.altKey
      if (String.fromCharCode(event.keyCode) !== 'C' || !isModifierKeyPressed) {
        return
      }
      if (!rootNode.current) {
        return
      }
      const copyBtn = rootNode.current.querySelector(
        '.cdg-copy',
      ) as HTMLButtonElement | null
      if (!copyBtn) {
        return
      }
      const initialEventAction = copyBtn.getAttribute('data-ga-event-action')
      // update the 'data-ga-event-action' on the button to track keyboard interaction
      copyBtn.dataset.gaEventAction =
        initialEventAction?.replace('click', 'keyboard') || 'copy-keyboard'
      copyBtn.click()
      copyBtn.dataset.gaEventAction = initialEventAction! // reset the 'data-ga-event-action' back to initial
    })
  }, [rootNode])
  return null
}

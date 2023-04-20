import {FocusableElement, ScrollableElement} from '../types'
import {isAndroid} from './platform'

let supportsPreventScrollCached: boolean | null = null

function supportsPreventScroll() {
  if (supportsPreventScrollCached == null) {
    supportsPreventScrollCached = false
    try {
      const focusElem = document.createElement('div')
      focusElem.focus({
        get preventScroll() {
          supportsPreventScrollCached = true
          return true
        },
      })
    } catch (e) {
      // Ignore
    }
  }

  return supportsPreventScrollCached
}

export function focusWithoutScrolling(element: FocusableElement) {
  if (supportsPreventScroll()) {
    element.focus({preventScroll: true})
  } else {
    const scrollableElements = getScrollableElements(element)
    element.focus()
    restoreScrollPosition(scrollableElements)
  }
}

function restoreScrollPosition(scrollableElements: ScrollableElement[]) {
  for (const {element, scrollTop, scrollLeft} of scrollableElements) {
    element.scrollTop = scrollTop
    element.scrollLeft = scrollLeft
  }
}

function getScrollableElements(element: FocusableElement): ScrollableElement[] {
  let parent = element.parentNode
  const scrollableElements: ScrollableElement[] = []
  const rootScrollingElement =
    document.scrollingElement || document.documentElement

  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (
      parent.offsetHeight < parent.scrollHeight ||
      parent.offsetWidth < parent.scrollWidth
    ) {
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft,
      })
    }
    parent = parent.parentNode
  }

  if (rootScrollingElement instanceof HTMLElement) {
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft,
    })
  }

  return scrollableElements
}

export function isVirtualClick(event: MouseEvent | PointerEvent): boolean {
  // JAWS/NVDA with Firefox.
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if ((event as unknown).mozInputSource === 0 && event.isTrusted) {
    return true
  }

  // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
  // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
  // to detect TalkBack virtual clicks.
  if (isAndroid() && (event as PointerEvent).pointerType) {
    return event.type === 'click' && event.buttons === 1
  }

  return event.detail === 0 && !(event as PointerEvent).pointerType
}

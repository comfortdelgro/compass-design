import {Tree} from './tree'
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import {FocusEvent as ReactFocusEvent, RefObject} from 'react'
import {
  FOCUSABLE_ELEMENT_SELECTOR,
  TABBABLE_ELEMENT_SELECTOR,
} from '../constants/focus.constant'
import {
  FocusManager,
  FocusManagerOptions,
  FocusableElement,
  Modality,
  ScopeRef,
  ScrollIntoViewportOpts,
  ScrollableElement,
} from '../types'
import {isAndroid} from './platform'
import {runAfterTransition} from './text'

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

function isStyleVisible(element: Element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) {
    return false
  }

  const {display, visibility} = element.style

  let isVisible =
    display !== 'none' && visibility !== 'hidden' && visibility !== 'collapse'

  if (isVisible) {
    // @ts-ignore
    const {getComputedStyle} = element.ownerDocument.defaultView
    // @ts-ignore
    const {display: computedDisplay, visibility: computedVisibility} =
      getComputedStyle(element)

    isVisible =
      computedDisplay !== 'none' &&
      computedVisibility !== 'hidden' &&
      computedVisibility !== 'collapse'
  }

  return isVisible
}

function isAttributeVisible(element: Element, childElement?: Element) {
  return (
    !element.hasAttribute('hidden') &&
    (element.nodeName === 'DETAILS' &&
    childElement &&
    childElement.nodeName !== 'SUMMARY'
      ? element.hasAttribute('open')
      : true)
  )
}

// @ts-ignore
export function isElementVisible(element: Element, childElement?: Element) {
  // @ts-ignore
  return (
    element.nodeName !== '#comment' &&
    isStyleVisible(element) &&
    isAttributeVisible(element, childElement) &&
    (!element.parentElement || isElementVisible(element.parentElement, element))
  )
}

export function isElementInScope(element: Element, scope: Element[]) {
  return scope.some((node) => node.contains(element))
}

export function isElementInChildScope(
  element: Element,
  // @ts-ignore
  scope: ScopeRef = null,
) {
  if (
    element instanceof Element &&
    element.closest('[data-react-aria-top-layer]')
  ) {
    return true
  }

  const focusScopeTree = new Tree()

  for (const {scopeRef: s} of focusScopeTree.traverse(
    focusScopeTree.getTreeNode(scope),
  )) {
    // @ts-ignore
    if (isElementInScope(element, s.current)) {
      return true
    }
  }

  return false
}

export function getFocusableTreeWalker(
  root: Element,
  opts?: FocusManagerOptions,
  scope?: Element[],
) {
  const selector = opts?.tabbable
    ? TABBABLE_ELEMENT_SELECTOR
    : FOCUSABLE_ELEMENT_SELECTOR
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      // Skip nodes inside the starting node.
      if (opts?.from?.contains(node)) {
        return NodeFilter.FILTER_REJECT
      }

      if (
        (node as Element).matches(selector) &&
        isElementVisible(node as Element) &&
        (!scope || isElementInScope(node as Element, scope)) &&
        (!opts?.accept || opts.accept(node as Element))
      ) {
        return NodeFilter.FILTER_ACCEPT
      }

      return NodeFilter.FILTER_SKIP
    },
  })

  if (opts?.from) {
    walker.currentNode = opts.from
  }

  return walker
}

const currentModality = null

export function getInteractionModality(): Modality {
  // @ts-ignore
  return currentModality
}

export function focusSafely(element: FocusableElement) {
  if (getInteractionModality() === 'virtual') {
    const lastFocusedElement = document.activeElement
    runAfterTransition(() => {
      // If focus did not move and the element is still in the document, focus it.
      if (
        document.activeElement === lastFocusedElement &&
        document.contains(element)
      ) {
        focusWithoutScrolling(element)
      }
    })
  } else {
    focusWithoutScrolling(element)
  }
}

function focusElement(element: FocusableElement | null, scroll = false) {
  if (element != null && !scroll) {
    try {
      focusSafely(element)
    } catch (err) {
      // ignore
    }
  } else if (element != null) {
    try {
      element.focus()
    } catch (err) {
      // ignore
    }
  }
}

function last(walker: TreeWalker) {
  let next: FocusableElement
  let last: FocusableElement
  do {
    last = walker.lastChild() as FocusableElement
    if (last) {
      next = last
    }
  } while (last)
  // @ts-ignore
  return next
}

export function createFocusManager(
  ref: RefObject<Element>,
  defaultOptions: FocusManagerOptions = {},
): FocusManager {
  return {
    // @ts-ignore
    focusNext(opts: FocusManagerOptions = {}) {
      const root = ref.current
      if (!root) {
        return
      }
      const {
        from,
        tabbable = defaultOptions.tabbable,
        wrap = defaultOptions.wrap,
        accept = defaultOptions.accept,
      } = opts
      const node = from || document.activeElement
      // @ts-ignore
      const walker = getFocusableTreeWalker(root, {tabbable, accept})
      if (root.contains(node)) {
        // @ts-ignore
        walker.currentNode = node
      }
      let nextNode = walker.nextNode() as FocusableElement
      if (!nextNode && wrap) {
        walker.currentNode = root
        nextNode = walker.nextNode() as FocusableElement
      }
      if (nextNode) {
        focusElement(nextNode, true)
      }
      return nextNode
    },
    // @ts-ignore
    focusPrevious(opts: FocusManagerOptions = defaultOptions) {
      const root = ref.current
      if (!root) {
        return
      }
      const {
        from,
        tabbable = defaultOptions.tabbable,
        wrap = defaultOptions.wrap,
        accept = defaultOptions.accept,
      } = opts
      const node = from || document.activeElement
      // @ts-ignore
      const walker = getFocusableTreeWalker(root, {tabbable, accept})
      if (root.contains(node)) {
        // @ts-ignore
        walker.currentNode = node
      } else {
        const next = last(walker)
        if (next) {
          focusElement(next, true)
        }
        return next
      }
      let previousNode = walker.previousNode() as FocusableElement
      if (!previousNode && wrap) {
        walker.currentNode = root
        previousNode = last(walker)
      }
      if (previousNode) {
        focusElement(previousNode, true)
      }
      return previousNode
    },
    // @ts-ignore
    focusFirst(opts = defaultOptions) {
      const root = ref.current
      if (!root) {
        return
      }
      const {
        tabbable = defaultOptions.tabbable,
        accept = defaultOptions.accept,
      } = opts
      // @ts-ignore
      const walker = getFocusableTreeWalker(root, {tabbable, accept})
      const nextNode = walker.nextNode() as FocusableElement
      if (nextNode) {
        focusElement(nextNode, true)
      }
      return nextNode
    },
    // @ts-ignore
    focusLast(opts = defaultOptions) {
      const root = ref.current
      if (!root) {
        return
      }
      const {
        tabbable = defaultOptions.tabbable,
        accept = defaultOptions.accept,
      } = opts
      // @ts-ignore
      const walker = getFocusableTreeWalker(root, {tabbable, accept})
      const next = last(walker)
      if (next) {
        focusElement(next, true)
      }
      return next
    },
  }
}

export class SyntheticFocusEvent<Target = Element>
  implements ReactFocusEvent<Target>
{
  nativeEvent: FocusEvent
  target: EventTarget & Target
  currentTarget: EventTarget & Target
  relatedTarget: Element
  bubbles: boolean
  cancelable: boolean
  defaultPrevented: boolean
  eventPhase: number
  isTrusted: boolean
  timeStamp: number
  type: string

  constructor(type: string, nativeEvent: FocusEvent) {
    this.nativeEvent = nativeEvent
    this.target = nativeEvent.target as EventTarget & Target
    this.currentTarget = nativeEvent.currentTarget as EventTarget & Target
    this.relatedTarget = nativeEvent.relatedTarget as Element
    this.bubbles = nativeEvent.bubbles
    this.cancelable = nativeEvent.cancelable
    this.defaultPrevented = nativeEvent.defaultPrevented
    this.eventPhase = nativeEvent.eventPhase
    this.isTrusted = nativeEvent.isTrusted
    this.timeStamp = nativeEvent.timeStamp
    this.type = type
  }

  isDefaultPrevented(): boolean {
    return this.nativeEvent.defaultPrevented
  }

  preventDefault(): void {
    this.defaultPrevented = true
    this.nativeEvent.preventDefault()
  }

  stopPropagation(): void {
    this.nativeEvent.stopPropagation()
    this.isPropagationStopped = () => true
  }

  isPropagationStopped(): boolean {
    return false
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  persist() {}
}

export function getScrollParent(node: Element): Element {
  if (isScrollable(node)) {
    // @ts-ignore
    node = node.parentElement
  }

  while (node && !isScrollable(node)) {
    // @ts-ignore
    node = node.parentElement
  }

  return node || document.scrollingElement || document.documentElement
}

export function isScrollable(node: Element): boolean {
  const style = window.getComputedStyle(node)
  return /(auto|scroll)/.test(
    style.overflow + style.overflowX + style.overflowY,
  )
}

function relativeOffset(
  ancestor: HTMLElement,
  child: HTMLElement,
  axis: 'left' | 'top',
) {
  const prop = axis === 'left' ? 'offsetLeft' : 'offsetTop'
  let sum = 0
  while (child.offsetParent) {
    sum += child[prop]
    if (child.offsetParent === ancestor) {
      // Stop once we have found the ancestor we are interested in.
      break
    } else if (child.offsetParent.contains(ancestor)) {
      // If the ancestor is not `position:relative`, then we stop at
      // _its_ offset parent, and we subtract off _its_ offset, so that
      // we end up with the proper offset from child to ancestor.
      sum -= ancestor[prop]
      break
    }
    child = child.offsetParent as HTMLElement
  }
  return sum
}

export function scrollIntoView(scrollView: HTMLElement, element: HTMLElement) {
  const offsetX = relativeOffset(scrollView, element, 'left')
  const offsetY = relativeOffset(scrollView, element, 'top')
  const width = element.offsetWidth
  const height = element.offsetHeight
  let x = scrollView.scrollLeft
  let y = scrollView.scrollTop

  // Account for top/left border offsetting the scroll top/Left
  const {borderTopWidth, borderLeftWidth} = getComputedStyle(scrollView)
  const borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10)
  const borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10)
  // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
  const maxX = borderAdjustedX + scrollView.clientWidth
  const maxY = borderAdjustedY + scrollView.clientHeight

  if (offsetX <= x) {
    x = offsetX - parseInt(borderLeftWidth, 10)
  } else if (offsetX + width > maxX) {
    x += offsetX + width - maxX
  }
  if (offsetY <= borderAdjustedY) {
    y = offsetY - parseInt(borderTopWidth, 10)
  } else if (offsetY + height > maxY) {
    y += offsetY + height - maxY
  }
  scrollView.scrollLeft = x
  scrollView.scrollTop = y
}

export function scrollIntoViewport(
  targetElement: Element,
  opts?: ScrollIntoViewportOpts,
) {
  if (document.contains(targetElement)) {
    const root = document.scrollingElement || document.documentElement
    const isScrollPrevented =
      window.getComputedStyle(root).overflow === 'hidden'
    if (!isScrollPrevented) {
      const {left: originalLeft, top: originalTop} =
        targetElement.getBoundingClientRect()

      targetElement?.scrollIntoView?.({block: 'nearest'})
      const {left: newLeft, top: newTop} = targetElement.getBoundingClientRect()
      if (
        Math.abs(originalLeft - newLeft) > 1 ||
        Math.abs(originalTop - newTop) > 1
      ) {
        opts?.containingElement?.scrollIntoView?.({
          block: 'center',
          inline: 'center',
        })
        targetElement.scrollIntoView?.({block: 'nearest'})
      }
    } else {
      let scrollParent = getScrollParent(targetElement)
      while (
        targetElement &&
        scrollParent &&
        targetElement !== root &&
        scrollParent !== root
      ) {
        scrollIntoView(
          scrollParent as HTMLElement,
          targetElement as HTMLElement,
        )
        targetElement = scrollParent
        scrollParent = getScrollParent(targetElement)
      }
    }
  }
}

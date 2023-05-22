/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {FocusableElement} from '../types'

interface ScrollableElement {
  element: HTMLElement
  scrollTop: number
  scrollLeft: number
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

let supportsPreventScrollCached = false
function supportsPreventScroll() {
  if (!supportsPreventScrollCached) {
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

function getScrollableElements(element: FocusableElement): ScrollableElement[] {
  let parent = element.parentNode
  const scrollableElements: ScrollableElement[] = []
  const rootScrollingElement =
    document.scrollingElement ?? document.documentElement

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

function restoreScrollPosition(scrollableElements: ScrollableElement[]) {
  for (const {element, scrollTop, scrollLeft} of scrollableElements) {
    element.scrollTop = scrollTop
    element.scrollLeft = scrollLeft
  }
}

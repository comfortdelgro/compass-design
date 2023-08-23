/**
 * This file contains code adapted from the Chakra UI project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useEffect, useLayoutEffect} from 'react'

/**
 * Sort an array of DOM nodes according to the HTML tree order
 * @see http://www.w3.org/TR/html5/infrastructure.html#tree-order
 */
export function sortNodes(nodes: Node[]) {
  return nodes.sort((a, b) => {
    const compare = a.compareDocumentPosition(b)

    if (
      compare & Node.DOCUMENT_POSITION_FOLLOWING ||
      compare & Node.DOCUMENT_POSITION_CONTAINED_BY
    ) {
      // a < b
      return -1
    }

    if (
      compare & Node.DOCUMENT_POSITION_PRECEDING ||
      compare & Node.DOCUMENT_POSITION_CONTAINS
    ) {
      // a > b
      return 1
    }

    if (
      compare & Node.DOCUMENT_POSITION_DISCONNECTED ||
      compare & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
    ) {
      throw Error('Cannot sort the given nodes.')
    } else {
      return 0
    }
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isElement = (el: any): el is HTMLElement =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  typeof el == 'object' && 'nodeType' in el && el.nodeType === Node.ELEMENT_NODE

export function getNextIndex(current: number, max: number, loop: boolean) {
  let next = current + 1
  if (loop && next >= max) next = 0
  return next
}

export function getPrevIndex(current: number, max: number, loop: boolean) {
  let next = current - 1
  if (loop && next < 0) next = max
  return next
}

export const useSafeLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cast = <T>(value: any) => value as T

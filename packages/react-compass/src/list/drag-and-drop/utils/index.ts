/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import {DragAndDropListItemProps} from '../item'

export function getTranslateOffset(element: Element) {
  const style = window.getComputedStyle(element)
  return (
    Math.max(
      parseInt(style.getPropertyValue('margin-top'), 10),
      parseInt(style.getPropertyValue('margin-bottom'), 10),
    ) + element.getBoundingClientRect().height
  )
}

export function transformItem(
  element: Element,
  offsetY: number | null = 0,
  offsetX: number | null = 0,
) {
  if (!element) return
  const elm = element as HTMLElement
  if (offsetY === null || offsetX === null) {
    elm.style.removeProperty('transform')
    return
  }
  elm.style.transform = `translate(${offsetX}px, ${offsetY}px)`
}

export function isItemTransformed(element: Element) {
  return !!(element as HTMLElement).style.transform
}

export function setItemTransition(
  element: Element,
  duration: number,
  timing?: string,
) {
  if (element) {
    const elm = element as HTMLElement
    elm.style.transition = `transform ${duration}ms${
      timing ? ` ${timing}` : ''
    }`
  }
}

// returns the "slot" for the targetValue, aka where it should go
// in an ordered "array", it starts with -1 index
export function binarySearch(array: number[], targetValue: number) {
  let min = 0
  let max = array.length - 1
  let guess: number
  while (min <= max) {
    guess = Math.floor((max + min) / 2)
    if (
      !array[guess + 1] ||
      (array[guess]! <= targetValue && array[guess + 1]! >= targetValue)
    ) {
      return guess
    } else if (array[guess]! < targetValue && array[guess + 1]! < targetValue) {
      min = guess + 1
    } else {
      max = guess - 1
    }
  }
  return -1
}

export const schd = (fn: Function) => {
  let lastArgs: any[] = []
  let frameId: number | null = null
  const wrapperFn = (...args: any[]) => {
    lastArgs = args
    if (frameId) {
      return
    }
    frameId = requestAnimationFrame(() => {
      frameId = null
      fn(...lastArgs)
    })
  }
  wrapperFn.cancel = () => {
    if (frameId) {
      cancelAnimationFrame(frameId)
    }
  }
  return wrapperFn
}

export function checkIfInteractive(target: Element, rootElement: Element) {
  const DISABLED_ELEMENTS = [
    'input',
    'textarea',
    'select',
    'option',
    'optgroup',
    'video',
    'audio',
    'button',
    'a',
  ]
  const DISABLED_ROLES = ['button', 'link', 'checkbox', 'tab']
  while (target !== rootElement) {
    if (target.getAttribute('data-handler')) {
      return false
    }
    if (DISABLED_ELEMENTS.includes(target.tagName.toLowerCase())) {
      return true
    }
    const role = target.getAttribute('role')
    if (role && DISABLED_ROLES.includes(role.toLowerCase())) {
      return true
    }
    if (
      target.tagName.toLowerCase() === 'label' &&
      target.hasAttribute('for')
    ) {
      return true
    }
    if (target.tagName) target = target.parentElement!
  }
  return false
}

export const pickChilds = (
  children: React.ReactNode | undefined,
  targetType: React.ElementType,
): Array<
  React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
> => {
  const matched: Array<
    React.DetailedReactHTMLElement<DragAndDropListItemProps, HTMLElement>
  > = []
  React.Children.forEach(children, (item) => {
    if (!React.isValidElement(item)) return item
    if (item.type === targetType) {
      matched.push(
        item as React.DetailedReactHTMLElement<
          DragAndDropListItemProps,
          HTMLElement
        >,
      )
    }
    return item
  })
  const childs = matched.length >= 0 ? matched : []

  return childs
}

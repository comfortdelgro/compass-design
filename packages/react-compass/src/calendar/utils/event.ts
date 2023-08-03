import {nonTextInputTypes} from '../constants/common'

export function isVirtualPointerEvent(event: PointerEvent) {
  return (
    (event.width === 0 && event.height === 0) ||
    (event.width === 1 &&
      event.height === 1 &&
      event.pressure === 0 &&
      event.detail === 0 &&
      event.pointerType === 'mouse')
  )
}

export function isHTMLAnchorLink(target: Element): boolean {
  return target.tagName === 'A' && target.hasAttribute('href')
}

export function isValidInputKey(target: HTMLInputElement, key: string) {
  return target.type === 'checkbox' || target.type === 'radio'
    ? key === ' '
    : nonTextInputTypes.has(target.type)
}

export function isValidKeyboardEvent(
  event: unknown,
  currentTarget: unknown,
): boolean {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const {key, code} = event
  const element = currentTarget as HTMLElement
  const role = element.getAttribute('role')
  // Accessibility for keyboards. Space and Enter only.
  // "Space bar" is for IE 11
  return (
    (key === 'Enter' ||
      key === ' ' ||
      key === 'Spacebar' ||
      code === 'Space') &&
    !(
      (element instanceof HTMLInputElement &&
        !isValidInputKey(element, key as string)) ||
      element instanceof HTMLTextAreaElement ||
      element.isContentEditable
    ) &&
    // A link with a valid href should be handled natively,
    // unless it also has role='button' and was triggered using Space.
    (!isHTMLAnchorLink(element) || (role === 'button' && key !== 'Enter')) &&
    // An element with role='link' should only trigger with Enter key
    !(role === 'link' && key !== 'Enter')
  )
}

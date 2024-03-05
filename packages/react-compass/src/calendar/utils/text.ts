import {FocusableElement} from '../types'
import {isIOS} from './platform'

type State = 'default' | 'disabled' | 'restoring'

// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-seletect: none for each pressed element individually
let state: State = 'default'

const transitionsByElement = new Map<EventTarget, Set<string>>()

const transitionCallbacks = new Set<() => void>()
const modifiedElementMap = new WeakMap<Element, string>()
let savedUserSelect = ''

export function runAfterTransition(fn: () => void) {
  // Wait one frame to see if an animation starts, e.g. a transition on mount.
  requestAnimationFrame(() => {
    // If no transitions are running, call the function immediately.
    // Otherwise, add it to a list of callbacks to run at the end of the animation.
    if (transitionsByElement.size === 0) {
      fn()
    } else {
      transitionCallbacks.add(fn)
    }
  })
}

export function restoreTextSelection(target: FocusableElement | null) {
  if (isIOS()) {
    // If the state is already default, there's nothing to do.
    // If it is restoring, then there's no need to queue a second restore.
    if (state !== 'disabled') {
      return
    }

    state = 'restoring'

    // There appears to be a delay on iOS where selection still might occur
    // after pointer up, so wait a bit before removing user-select.
    setTimeout(() => {
      // Wait for any CSS transitions to complete so we don't recompute style
      // for the whole page in the middle of the animation and cause jank.
      runAfterTransition(() => {
        // Avoid race conditions
        if (state === 'restoring') {
          if (document.documentElement.style.webkitUserSelect === 'none') {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            document.documentElement.style.webkitUserSelect =
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              savedUserSelect || ''
          }

          savedUserSelect = ''
          state = 'default'
        }
      })
    }, 300)
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    if (target && modifiedElementMap.has(target)) {
      const targetOldUserSelect = modifiedElementMap.get(target)

      if (target.style.userSelect === 'none') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        target.style.userSelect = targetOldUserSelect
      }

      if (target.getAttribute('style') === '') {
        target.removeAttribute('style')
      }
      modifiedElementMap.delete(target)
    }
  }
}

export function disableTextSelection(target?: Element) {
  if (isIOS()) {
    if (state === 'default') {
      savedUserSelect = document.documentElement.style.webkitUserSelect
      document.documentElement.style.webkitUserSelect = 'none'
    }

    state = 'disabled'
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    // If not iOS, store the target's original user-select and change to user-select: none
    // Ignore state since it doesn't apply for non iOS
    modifiedElementMap.set(target, target.style.userSelect)
    target.style.userSelect = 'none'
  }
}

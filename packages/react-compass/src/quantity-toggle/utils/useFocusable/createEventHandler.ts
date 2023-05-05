/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */

import {SyntheticEvent} from 'react'
import {BaseEvent} from '../types'

export function createEventHandler<T extends SyntheticEvent>(
  handler: ((e: BaseEvent<T>) => void) | undefined,
): (e: T) => void {
  if (!handler) {
    return () => {}
  } else {
    let shouldStopPropagation = true
    return (e: T) => {
      const event: BaseEvent<T> = {
        ...e,
        preventDefault() {
          e.preventDefault()
        },
        isDefaultPrevented() {
          return e.isDefaultPrevented()
        },
        stopPropagation() {
          console.error(
            'stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.',
          )
        },
        continuePropagation() {
          shouldStopPropagation = false
        },
      }

      handler(event)

      if (shouldStopPropagation) {
        e.stopPropagation()
      }
    }
  }
}

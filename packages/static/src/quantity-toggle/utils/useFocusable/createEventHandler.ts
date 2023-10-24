/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

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

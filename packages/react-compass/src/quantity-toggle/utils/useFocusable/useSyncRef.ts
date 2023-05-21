/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) [year(s)], Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {MutableRefObject, RefObject} from 'react'
import {useLayoutEffect} from '../useLayoutEffect'

interface ContextValue<T> {
  ref?: MutableRefObject<T>
}

export function useSyncRef<T>(context: ContextValue<T>, ref: RefObject<T>) {
  useLayoutEffect(() => {
    if (context.ref?.current) {
      context.ref.current = ref.current as T
    }
    return () => {
      if (context.ref?.current) {
        context.ref.current = null as T
      }
    }
  }, [context, ref])
}

/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useLayoutEffect} from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSyncRef(context: any, ref: any) {
  useLayoutEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    if (context?.ref && ref) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      context.ref.current = ref.current
    }
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (context?.ref && ref) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        context.ref.current = null
      }
    }
  }, [context, ref])
}

/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useLayoutEffect, useState} from 'react'
import {useId} from './useId'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useSlotId(depArray: readonly any[] = []): string {
  const id = useId()
  const [resolvedId, setResolvedId] = useState<string | undefined>(id) // Adjust the type of resolvedId

  const updateId = useCallback(() => {
    const generatorFunction = function* () {
      yield id
      yield document.getElementById(id) ? id : undefined
    }

    const generator = generatorFunction()
    setResolvedId(generator.next().value as string | undefined) // Retrieve the first yielded value
  }, [id])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useLayoutEffect(updateId, [id, ...depArray])
  return resolvedId ?? ''
}

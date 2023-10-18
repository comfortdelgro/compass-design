/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
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

  useLayoutEffect(updateId, [id, ...depArray]) // Remove updateId from the dependency array
  return resolvedId ?? '' // Provide a default value in case resolvedId is undefined
}

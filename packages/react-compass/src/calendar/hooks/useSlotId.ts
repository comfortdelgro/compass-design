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

export function useSlotId(depArray: ReadonlyArray<any> = []): string {
  const id = useId()
  const [resolvedId, setResolvedId] = useState(id)
  const updateId = useCallback(() => {
    // @ts-ignore
    setResolvedId(function* () {
      yield id

      yield document.getElementById(id) ? id : undefined
    })
  }, [id, setResolvedId])
  // @ts-ignore
  useLayoutEffect(updateId, [id, updateId, ...depArray])

  return resolvedId
}

/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react'
import {useSSRSafeId} from './useSSRSafeId'

const idsUpdaterMap = new Map<string, (v: string) => void>()

export function useId(defaultId?: string): string {
  const [value, setValue] = useState<unknown>(defaultId)
  const nextId = useRef<unknown>(null)

  const res = useSSRSafeId(value)

  const updateValue = useCallback((val) => {
    nextId.current = val
  }, [])

  idsUpdaterMap.set(res, updateValue)

  useLayoutEffect(() => {
    const r = res
    return () => {
      idsUpdaterMap.delete(r)
    }
  }, [res])

  useEffect(() => {
    const newId = nextId.current
    if (newId) {
      nextId.current = null
      setValue(newId)
    }
  })

  return res
}

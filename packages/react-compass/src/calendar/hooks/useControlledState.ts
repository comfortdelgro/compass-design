/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */

import {useCallback, useRef, useState} from 'react'

export function useControlledState<T>(
  value?: T | null,
  defaultValue?: T,
  onChange?: (value: T, ...args: any[]) => void,
): [T, (value: T, ...args: any[]) => void] {
  const [stateValue, setStateValue] = useState(value || defaultValue)
  const ref = useRef(value !== undefined)
  const wasControlled = ref.current
  const isControlled = value !== undefined
  const stateRef = useRef<T | undefined | null>(stateValue)
  if (wasControlled !== isControlled) {
    console.warn(
      `WARN: A component changed from ${
        wasControlled ? 'controlled' : 'uncontrolled'
      } to ${isControlled ? 'controlled' : 'uncontrolled'}.`,
    )
  }

  ref.current = isControlled

  const setValue = useCallback(
    (value, ...args) => {
      const onChangeCaller = (value: T, ...onChangeArgs: any) => {
        if (onChange) {
          if (!Object.is(stateRef.current, value)) {
            onChange(value, ...onChangeArgs)
          }
        }
        if (!isControlled) {
          stateRef.current = value
        }
      }

      if (typeof value === 'function') {
        console.warn(
          'We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320',
        )
        const updateFunction = (oldValue: any, ...functionArgs: any[]) => {
          const interceptedValue = value(
            isControlled ? stateRef.current : oldValue,
            ...functionArgs,
          )
          onChangeCaller(interceptedValue, ...args)
          if (!isControlled) {
            return interceptedValue
          }
          return oldValue
        }
        setStateValue(updateFunction)
      } else {
        if (!isControlled) {
          setStateValue(value)
        }
        onChangeCaller(value, ...args)
      }
    },
    [isControlled, onChange],
  )

  if (isControlled) {
    stateRef.current = value
  } else {
    value = stateValue
  }
  return [value, setValue]
}

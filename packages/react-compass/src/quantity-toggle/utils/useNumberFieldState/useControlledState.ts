/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
/* eslint-disable @typescript-eslint/no-unnecessary-condition */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {useCallback, useRef, useState} from 'react'

export function useControlledState<T>(
  value: T | undefined,
  defaultValue: T | undefined,
  onChange: ((value: T, ...args: any[]) => void) | undefined,
): [T, (value: T, ...args: any[]) => void] {
  const [stateValue, setStateValue] = useState(value ?? defaultValue)
  const ref = useRef(value !== undefined)
  const wasControlled = ref.current
  const isControlled = value !== undefined
  // Internal state reference for useCallback
  const stateRef = useRef(stateValue)
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
      const onChangeCaller = (value: T, ...onChangeArgs: any[]) => {
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

  // If a controlled component's value prop changes, we need to update stateRef
  if (isControlled) {
    stateRef.current = value
  } else {
    value = stateValue
  }

  return [value as T, setValue]
}

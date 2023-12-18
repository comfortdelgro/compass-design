import {SetStateAction, useCallback, useEffect, useRef, useState} from 'react'

type CallBackType<T> = (updatedValue: T) => void

type UseStateWithCallbackReturnType = <T>(
  initialValue: T | (() => T),
) => [T, (newValue: SetStateAction<T>, callback?: CallBackType<T>) => void]

/**
 * @deprecated when `isFocusing` is removed from `PudoValueChange`,
 * no need to prevent batching `arrPudoValues` state updates anymore.
 *
 * @todo Remove this hook when `isFocusing` is removed from `PudoValueChange`.
 */
export const useStateWithCallback: UseStateWithCallbackReturnType = <T>(
  initialValue: T | (() => T),
) => {
  const [state, _setState] = useState<T>(initialValue)
  const callbackQueue = useRef<Array<CallBackType<T>>>([])

  const setState = useCallback(
    (newValue: SetStateAction<T>, callback?: CallBackType<T>) => {
      _setState(newValue)
      if (callback && typeof callback === 'function') {
        callbackQueue.current.push(callback)
      }
    },
    [],
  )

  useEffect(() => {
    callbackQueue.current.forEach((cb) => cb(state))
    callbackQueue.current = []
  }, [state])

  return [state, setState]
}

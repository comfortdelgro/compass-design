/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useRef, useState} from 'react';

export function useControlledState<T, C = T>(value: Exclude<T, undefined>, defaultValue: Exclude<T, undefined> | undefined, onChange?: (v: C) => void): [T, (value: T) => void];
export function useControlledState<T, C = T>(value: Exclude<T, undefined> | undefined, defaultValue: Exclude<T, undefined>, onChange?: (v: C) => void): [T, (value: T) => void];
export function useControlledState<T, C = T>(value: T, defaultValue: T, onChange?: (v: C) => void): [T, (value: T) => void] {
  const [stateValue, setStateValue] = useState(value || defaultValue);
  const isControlledRef = useRef(value !== undefined);
  const isControlled = value !== undefined;
  useEffect(() => {
    isControlledRef.current = isControlled;
  }, [isControlled]);

  let currentValue = isControlled ? value : stateValue;
  const setValue = useCallback((value) => {
    const onChangeCaller = (value) => {
      if (onChange) {
        if (!Object.is(currentValue, value)) {
          onChange(value);
        }
      }
      if (!isControlled) {
        currentValue = value;
      }
    };

    if (!isControlled) {
      setStateValue(value);
    }
    onChangeCaller(value);
  }, [isControlled, currentValue, onChange]);

  return [currentValue, setValue];
}
